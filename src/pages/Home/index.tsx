import React from 'react';
import LoggedNav from '../../Components/Navbar/LoggedNav';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <LoggedNav />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
