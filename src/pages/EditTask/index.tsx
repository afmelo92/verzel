import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from './styles';

const EditTask: React.FC = () => {
  const { id }: any = useParams();

  return (
    <Container>
      <h3>
        ID:
        {id}
      </h3>
    </Container>
  );
};

export default EditTask;
