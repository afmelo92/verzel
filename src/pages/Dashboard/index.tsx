import React from 'react';
import LoggedNav from '../../Components/Navbar/LoggedNav';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LoggedNav />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
