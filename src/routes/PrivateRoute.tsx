import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { IState } from '../store';
import { IUserState } from '../store/modules/user/types';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = useSelector<IState, IUserState>(state => state.user);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return user.email !== '' ? <Component /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
