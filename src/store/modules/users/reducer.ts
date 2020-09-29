/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { IUsersState } from './types';

const INITIAL_STATE: IUsersState = {
  users: [],
};

const users: Reducer<IUsersState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'CREATE_USER': {
        const { userData } = action.payload;

        draft.users.push(userData);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default users;
