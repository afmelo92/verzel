import { Form } from '@unform/web';
import React from 'react';
import Navbar from '../../Components/Navbar';

import { Container, Content, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Content>
          <div>
            <h1>Build for developers</h1>
            <h3>
              GitHub is a development platform inspired by the way you work.
              From open source to business, you can host and review code, manage
              projects, and build software alongside 50 million developers.
            </h3>
          </div>
          <Form onSubmit={() => {}}>
            <input type="text" name="username" />
            <input type="text" name="email" />
            <input type="password" name="password" />
            <small>
              Make sure it is at least 15 characters OR at least 8 characters
              including a number and a lowercase letter. Learn more.
            </small>
            <button type="button">Sign up for GitHub</button>
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
