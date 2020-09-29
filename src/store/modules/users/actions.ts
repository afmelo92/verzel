import { IAction, IUserState } from './types';

export function createUser(userData: IUserState): IAction {
  return {
    type: 'CREATE_USER',
    payload: {
      userData,
    },
  };
}
