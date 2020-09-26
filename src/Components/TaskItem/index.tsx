import React from 'react';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';

import { Container, Content } from './styles';

const TaskItem: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="task-row">
          <h3 className="task-title">
            Tarefa com nome longo demais para caber dentro deste espaço pequeno
          </h3>
          <h3 className="start-date">01/08/2020</h3>
          <h3 className="end-date">12/12/2020</h3>
        </div>

        <div className="icons-row">
          <button type="button">
            <FaEdit size={28} color="#0091ea" />
          </button>
          <button type="button">
            <MdDeleteForever size={30} color="#c53030" />
          </button>
          <button type="button">
            <MdVisibility size={30} color="#FFEB3B" />
          </button>
          <button type="button">
            <FaCheckCircle size={25} color="#8BC34A" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default TaskItem;
