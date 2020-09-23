import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/home" exact component={Home} isPrivate />
    </Switch>
  );
};

export default Routes;
