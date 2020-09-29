import { IAction, IUserState, IUserTask } from './types';

export function loginUser(
  loginData: IUserState,
  tasksData: IUserTask,
): IAction {
  return {
    type: 'LOGIN_USER',
    payload: {
      loginData,
      tasksData,
    },
  };
}

export function logoutUser(): IAction {
  return {
    type: 'LOGOUT_USER',
  };
}

export function createTask(taskData: IUserTask): IAction {
  return {
    type: 'CREATE_TASK',
    payload: {
      taskData,
    },
  };
}

export function editTask(taskData: IUserTask): IAction {
  return {
    type: 'EDIT_TASK',
    payload: {
      taskData,
    },
  };
}

export function deleteTask(taskId: Number): IAction {
  return {
    type: 'DELETE_TASK',
    payload: {
      taskId,
    },
  };
}

export function doneTask(taskData: IUserTask): IAction {
  return {
    type: 'DONE_TASK',
    payload: {
      taskData,
    },
  };
}
