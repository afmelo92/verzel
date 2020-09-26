/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
// import { useHistory } from 'react-router-dom';

import moment from 'moment';
import { parseISO, isBefore } from 'date-fns';
import api from '../../services/api/api';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import LoggedNav from '../../Components/Navbar/LoggedNav';

import { Container, Content, Wrapper } from './styles';

interface FormData {
  taskName: string;
  endTaskDate: Date;
  deadlineDate: Date;
}

const NewTask: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      // deadlineDate = moment(deadlineDate, 'YYYY-MM-DD').toDate();
      // let { deadlineDate } = data;

      // deadlineDate = parseISO(data.deadlineDate.toString());
      // console.log(deadlineDate);

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

      await api.post('tasks', {
        taskName,
        endTaskDate,
        deadlineDate,
      });

      setLoading(false);

      // history.push('dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    } finally {
      setLoading(false);
    }
  }, []);

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
