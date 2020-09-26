import React from 'react';
import { MdAdd } from 'react-icons/md';
import LoggedNav from '../../Components/Navbar/LoggedNav';
import TaskItem from '../../Components/TaskItem';

import { Container, Wrapper, Content, TaskItemHeader } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LoggedNav />
      <Wrapper>
        <Content>
          <button className="new-task" type="button">
            <MdAdd size={30} color="#fff" />
          </button>
          <TaskItemHeader>
            <div className="description-row">
              <h3 className="task-title">Nome da tarefa</h3>
              <h3 className="start-date">Início da tarefa</h3>
              <h3 className="end-date">Prazo final</h3>
            </div>

            <div className="options-row">
              <h3>Opções</h3>
            </div>
          </TaskItemHeader>
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
