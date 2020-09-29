/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { FaEdit, FaCheckCircle } from 'react-icons/fa';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api/api';
import { IState } from '../../store';
import { deleteTask, doneTask } from '../../store/modules/user/actions';
import { IUserState } from '../../store/modules/user/types';

import { Container, Content } from './styles';

interface TaskItemProps {
  id: number;
  taskName: string;
  endTaskDate: Date;
  deadlineDate?: Date;
  done: boolean;
  handleEditTask: (task: any) => void;
  openEditModal: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  taskName,
  endTaskDate,
  deadlineDate,
  done,
  handleEditTask,
  openEditModal,
}) => {
  const user = useSelector<IState, IUserState>(state => state.user);
  const dispatch = useDispatch();

  function setEditingTask(): void {
    handleEditTask(id);
    openEditModal();
  }

  async function handleDelete(deleteId: Number) {
    dispatch(deleteTask(deleteId));
    await api.delete(`tasks/${deleteId}`);
  }

  async function handleDoneTask(taskData: any) {
    dispatch(doneTask(taskData));
    await api.put(`tasks/${id}/`, {
      taskName: taskData.taskName,
      endTaskDate: taskData.endTaskDate,
      deadlineDate: taskData.deadlineDate,
      userId: String(user.id),
      done: taskData.done,
    });
  }
  return (
    <Container isDone={done}>
      <Content>
        <div className="task-row">
          <h3 className="task-title">{taskName}</h3>
          <h3 className="start-date">{endTaskDate}</h3>
          <h3 className="end-date">{deadlineDate}</h3>
        </div>

        <div className="icons-row">
          <Link to={`/edit/${id}`}>
            <button type="button">
              <FaEdit size={28} color="#0091ea" />
            </button>
          </Link>
          <button type="button" onClick={() => handleDelete(id)}>
            <MdDeleteForever size={30} color="#c53030" />
          </button>
          <button
            type="button"
            onClick={() => setEditingTask()}
            data-testid={`task-user-${user.id}`}
          >
            <MdVisibility size={30} color="#FFEB3B" />
          </button>
          <button
            type="button"
            onClick={() =>
              handleDoneTask({ id, taskName, endTaskDate, deadlineDate, done })
            }
          >
            <FaCheckCircle size={25} color="#8BC34A" />
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default TaskItem;
