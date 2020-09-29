/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { IUserState, IUserTask } from './types';

const INITIAL_STATE = {
  id: 0,
  name: '',
  email: '',
  password: '',
  birth: '',
  cpf: '',
  cep: '',
  address: '',
  addressNumber: 0,
  tasks: [],
};

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'LOGIN_USER': {
        const { loginData, tasksData } = action.payload;

        const {
          id,
          name,
          email,
          password,
          birth,
          cpf,
          cep,
          address,
          addressNumber,
        } = loginData;

        draft.id = id;
        draft.name = name;
        draft.password = password;
        draft.email = email;
        draft.birth = birth;
        draft.cpf = cpf;
        draft.cep = cep;
        draft.address = address;
        draft.addressNumber = addressNumber;

        // eslint-disable-next-line array-callback-return
        const usersTasks = tasksData.filter(
          (item: IUserTask) => Number(item.userId) === id,
        );

        draft.tasks = usersTasks;

        break;
      }
      case 'LOGOUT_USER': {
        draft.id = 0;
        draft.name = '';
        draft.email = '';
        draft.birth = '';
        draft.cpf = '';
        draft.cep = '';
        draft.address = '';
        draft.addressNumber = 0;
        draft.tasks = [];
        break;
      }
      case 'CREATE_TASK': {
        const { taskData } = action.payload;
        draft.tasks?.push(taskData);
        break;
      }
      case 'EDIT_TASK': {
        const { taskData } = action.payload;
        let editedTaskId;
        if (draft.tasks) {
          editedTaskId = draft.tasks.findIndex(item => item.id === taskData.id);

          draft.tasks[editedTaskId].deadlineDate = taskData.deadlineDate;
          draft.tasks[editedTaskId].endTaskDate = taskData.endTaskDate;
          draft.tasks[editedTaskId].taskName = taskData.taskName;
        }
        break;
      }
      case 'DELETE_TASK': {
        const { taskId } = action.payload;
        let editedTaskId;
        if (draft.tasks) {
          editedTaskId = draft.tasks.findIndex(item => item.id === taskId);

          draft.tasks.splice(editedTaskId, 1);
        }
        break;
      }
      case 'DONE_TASK': {
        const { taskData } = action.payload;
        let editedTaskId;
        if (draft.tasks) {
          editedTaskId = draft.tasks.findIndex(item => item.id === taskData.id);

          draft.tasks[editedTaskId].deadlineDate = taskData.deadlineDate;
          draft.tasks[editedTaskId].endTaskDate = taskData.endTaskDate;
          draft.tasks[editedTaskId].taskName = taskData.taskName;
          draft.tasks[editedTaskId].done = true;
        }
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default user;
