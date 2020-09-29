/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../services/api/api';

import Navbar from '../../Components/Navbar';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Wrapper } from './styles';
import { loginUser } from '../../store/modules/user/actions';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Apenas e-mail em formato válido')
            .lowercase('Apenas letras minúsculas'),

          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        // MOCK API CALL
        const response = await api.get(`users?email=${email}`);

        if (response.data[0].password !== password) {
          throw new Error('Validation fails');
        }

        const tasks = await api.get(`/tasks`);

        // DISPATCH TOKEN HERE
        dispatch(loginUser(response.data[0], tasks.data));

        setLoading(false);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch, history],
  );

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <small className="label">Email</small>
            <Input type="email" name="email" placeholder="Seu e-mail" />

            <small className="label">Senha</small>
            <Input type="password" name="password" placeholder="Senha" />

            <small>
              Make sure it is at least 15 characters OR at least 8 characters
              including a number and a lowercase letter. Learn more.
            </small>
            <Button loading={loading} icon={FaSpinner} type="submit">
              Sign up for GitHub
            </Button>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
