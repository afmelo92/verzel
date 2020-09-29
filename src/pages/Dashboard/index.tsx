import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskModal from '../../Components/Modal/TaskModal';

import LoggedNav from '../../Components/Navbar/LoggedNav';
import TaskItem from '../../Components/TaskItem';
import { IState } from '../../store';
import { IUserState } from '../../store/modules/user/types';

import { Container, Wrapper, Content, TaskItemHeader } from './styles';

const Dashboard: React.FC = () => {
  const user = useSelector<IState, IUserState>(state => state.user);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState();

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleEditTask(task: any): void {
    setEditingTask(task);
  }
  return (
    <Container>
      <LoggedNav />
      <Wrapper>
        <TaskModal
          isOpen={editModalOpen}
          setIsOpen={toggleEditModal}
          editingTask={editingTask}
        />
        <Content>
          <Link className="new-task" to="/new">
            <MdAdd size={30} color="#fff" />
          </Link>
          <TaskItemHeader>
            <div className="description-row">
              <h3 className="task-title">Nome da tarefa</h3>
              <h3 className="start-date">Data de entrega da tarefa</h3>
              <h3 className="end-date">Prazo final</h3>
            </div>

            <div className="options-row">
              <h3>Opções</h3>
            </div>
          </TaskItemHeader>
          {user.tasks &&
            user.tasks.map(task => (
              <TaskItem
                key={task.id}
                id={task.id}
                taskName={task.taskName}
                endTaskDate={task.endTaskDate}
                deadlineDate={task.deadlineDate}
                openEditModal={toggleEditModal}
                handleEditTask={handleEditTask}
                done
              />
            ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
