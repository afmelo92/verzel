/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUserTask {
  done: boolean;
  taskName: string;
  endTaskDate: Date;
  deadlineDate?: Date;
  userId: number;
  id: number;
}

export interface IUserState {
  id: number;
  name: string;
  email: string;
  password: string;
  birth: string;
  cpf?: string;
  cep?: string;
  address?: string;
  addressNumber?: number;
  tasks?: IUserTask[];
}

export interface IUsersState {
  users: IUserState[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface ILogin {
  email: string;
  password: string;
}
