import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import EditTask from '../pages/EditTask';
import NewTask from '../pages/NewTask';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/new" exact component={NewTask} isPrivate />
      <Route path="/edit/:id" exact isPrivate>
        <EditTask />
      </Route>
    </Switch>
  );
};

export default Routes;
