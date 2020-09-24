/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import Navbar from '../../Components/Navbar';

import { Container, Content, Wrapper } from './styles';
import Input from '../../Components/Input';
import api from '../../services/api/api';
import getValidationErrors from '../../utils/getValidationErrors';
import Button from '../../Components/Button';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      setLoading(true);

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string()
          .required('Usuário obrigatório')
          .lowercase()
          .min(2, 'Mínimo de 2 caracteres')
          .trim(),
        email: Yup.string()
          .required('Mensagem obrigatória')
          .email('Apenas e-mail em formato válido')
          .lowercase('Apenas letras minúsculas'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'Mínimo de 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { username, email, password } = data;

      await api.post('users', {
        username: String(username),
        email: String(email),
        password: String(password),
      });

      setLoading(false);
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
      <Navbar />
      <Wrapper>
        <Content>
          <section>
            <h1>Built for developers</h1>
            <h3>
              GitHub is a development platform inspired by the way you work.
              From open source to business, you can host and review code, manage
              projects, and build software alongside 50 million developers.
            </h3>
          </section>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <small className="label">Username</small>
            <Input type="text" name="username" />

            <small className="label">Email</small>
            <Input type="text" name="email" />

            <small className="label">Password</small>
            <Input type="password" name="password" />

            <small>
              Make sure it is at least 15 characters OR at least 8 characters
              including a number and a lowercase letter. Learn more.
            </small>
            <Button loading={loading} icon={FaSpinner} type="submit">
              Sign up for GitHub
            </Button>

            <small>
              By clicking “Sign up for GitHub”, you agree to our Terms of
              Service and Privacy Statement. We’ll occasionally send you account
              related emails.
            </small>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
