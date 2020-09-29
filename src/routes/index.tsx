import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import EditTask from '../pages/EditTask';
import NewTask from '../pages/NewTask';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/new" exact component={NewTask} />
      <PrivateRoute path="/edit/:id" exact component={EditTask} />
    </Switch>
  );
};

export default Routes;
