/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import moment from 'moment';
import { validate } from 'gerador-validador-cpf';
import { FaSpinner } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import api from '../../services/api/api';

import Navbar from '../../Components/Navbar';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { cepMask, cpfMask } from '../../utils/masks';

import { Container, Content, Wrapper } from './styles';
import { createUser } from '../../store/modules/users/actions';
import { loginUser } from '../../store/modules/user/actions';

interface FormData {
  name: string;
  email: string;
  password: string;
  birth: string;
  cpf?: string;
  cep?: string;
  address?: string;
  addressNumber?: number;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleCEP(cepDigit: string) {
    if (cepDigit.length === 9) {
      const cepResult = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://viacep.com.br/ws/${cepDigit}/json`,
      );

      if (!cepResult.data || cepResult.data.erro === true) {
        formRef.current?.setFieldError('cep', 'CEP inválido');
        return;
      }

      formRef.current?.setFieldError('cep', 'erase');

      const { logradouro, bairro, uf, localidade } = cepResult.data;

      formRef.current?.setFieldValue(
        'address',
        `${logradouro} - ${bairro} - ${localidade} - ${uf}`,
      );
      return formRef.current?.setFieldValue('cep', cepDigit);
    }

    formRef.current?.setFieldValue('cep', cepDigit);
  }

  async function handleCPF(cpfDigit: string) {
    if (validate(cpfDigit)) {
      formRef.current?.setFieldError('cpf', 'erase');
      return formRef.current?.setFieldValue('cpf', cpfDigit);
    }
    formRef.current?.setFieldValue('cpf', cpfDigit);

    return formRef.current?.setFieldError('cpf', 'CPF inválido');
  }

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .lowercase()
            .min(2, 'Mínimo de 2 caracteres')
            .trim()
            .required('Usuário obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Apenas e-mail em formato válido')
            .lowercase('Apenas letras minúsculas'),
          birth: Yup.string()
            .test(
              'birth-date',
              'Apenas maiores de 12 anos podem se cadastrar',
              value => {
                return moment().diff(moment(value), 'years') >= 12;
              },
            )
            .required('Data de nascimento obrigatória'),
          cpf: Yup.mixed()
            .test('cpf', 'CPF inválido', value => {
              if ((value && validate(value)) || value === '') {
                return true;
              }
              return false;
            })
            .notRequired()
            .optional(),
          cep: Yup.mixed()
            .test(
              'CEP API CALL',
              'CEP inválido. Insira apenas números',
              async value => {
                if (value && value.length === 8) {
                  const cepResult = await axios.get(
                    `http://viacep.com.br/ws/${value}/json`,
                  );
                  if (cepResult.data.erro === true) {
                    return false;
                  }
                }
                return true;
              },
            )
            .test('CEP LENGTH', 'Mínimo de 8 dígitos', value => {
              if (value.length < 8 && value.length > 0) {
                return false;
              }
              return true;
            }),
          addressNumber: Yup.number()
            .integer()
            .moreThan(-1, 'Número precisa ser maior que zero')
            .notRequired(),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo de 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          birth,
          address,
          addressNumber,
          password,
          cpf,
          cep,
        } = data;

        const response = await api.post('users', {
          name: String(name),
          email: String(email),
          birth: String(birth),
          cpf: String(cpf).replace(/\D/g, ''),
          cep: String(cep).replace(/\D/g, ''),
          address: String(address),
          addressNumber: String(addressNumber),
          password: String(password),
        });

        if (!response.data.email) {
          throw new Error('Validation fails');
        }

        const tasks = await api.get(`/tasks`);

        dispatch(createUser(response.data));

        dispatch(loginUser(response.data, tasks.data));

        setLoading(false);
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
            <small className="label">Nome</small>
            <Input type="text" name="name" placeholder="Seu nome" />

            <small className="label">Email</small>
            <Input type="email" name="email" placeholder="Seu e-mail" />

            <small className="label">Data de nascimento</small>
            <Input type="date" name="birth" placeholder="Data de nascimento" />

            <small className="label">CPF</small>
            <Input
              type="text"
              name="cpf"
              placeholder="999.999.999-99"
              maxLength={14}
              onChange={e => handleCPF(cpfMask(e.target.value))}
            />

            <small className="label">CEP</small>
            <Input
              type="text"
              name="cep"
              placeholder="12345-678"
              maxLength={9}
              onChange={e => handleCEP(cepMask(e.target.value))}
            />

            <small className="label">Endereço</small>
            <Input type="text" name="address" placeholder="Endereço" />

            <small className="label">Número</small>
            <Input
              type="number"
              min="0"
              name="addressNumber"
              placeholder="Numero"
              defaultValue={0}
            />

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

export default SignUp;
