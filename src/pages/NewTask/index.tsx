/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api/api';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import LoggedNav from '../../Components/Navbar/LoggedNav';

import { Container, Content, Wrapper } from './styles';
import { IState } from '../../store';
import { IUserState } from '../../store/modules/user/types';
import { createTask } from '../../store/modules/user/actions';

interface FormData {
  taskName: string;
  endTaskDate: Date;
  deadlineDate: Date;
}

const NewTask: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const user = useSelector<IState, IUserState>(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        if (!moment(data.deadlineDate).isValid()) {
          const schema = Yup.object().shape({
            taskName: Yup.string().required('Tarefa é obrigatória'),
            endTaskDate: Yup.date()
              .min(new Date(), 'Datas passadas não autorizadas')
              .required('Data de entrega é obrigatória')
              .typeError('Data de entrega obrigatório e/ou formato inválido'),
          });
          setLoading(true);

          formRef.current?.setErrors({});

          await schema.validate(data, {
            abortEarly: false,
          });
        } else {
          const schema = Yup.object().shape({
            taskName: Yup.string().required('Tarefa é obrigatória'),
            endTaskDate: Yup.date()
              .min(new Date(), 'Datas passadas não autorizadas')
              .required('Data de entrega é obrigatória')
              .typeError('Data de entrega obrigatório e/ou formato inválido'),
            deadlineDate: Yup.date()
              .min(
                Yup.ref('endTaskDate'),
                'O prazo final deve ser maior que a data de entrega',
              )
              .typeError('Prazo final obrigatório e/ou formato inválido'),
          });
          setLoading(true);

          formRef.current?.setErrors({});

          await schema.validate(data, {
            abortEarly: false,
          });
        }

        const { deadlineDate, taskName, endTaskDate } = data;

        const response = await api.post(`/users/${user.id}/tasks`, {
          taskName,
          endTaskDate,
          deadlineDate,
          done: false,
        });

        if (!response.data) {
          throw Error('API call fails');
        }

        dispatch(createTask(response.data));

        setLoading(false);

        history.push('dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch, history, user.id],
  );

  return (
    <Container>
      <LoggedNav />
      <Wrapper>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <small className="label">Tarefa</small>
            <Input type="text" name="taskName" placeholder="Nome da tarefa" />

            <small className="label">Data de entrega</small>
            <Input
              type="date"
              name="endTaskDate"
              placeholder="Data de entrega"
            />

            <small className="label">Data de conclusão</small>
            <Input
              type="date"
              name="deadlineDate"
              placeholder="Data de conclusão"
            />

            <Button loading={loading} icon={FaSpinner} type="submit">
              Cadastrar tarefa
            </Button>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default NewTask;
