import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules/rootReducer';
import { IUsersState } from './modules/users/types';
import { IUserState } from './modules/user/types';

export interface IState {
  users: IUsersState;
  user: IUserState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };
