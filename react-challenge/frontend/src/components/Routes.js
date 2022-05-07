import React from 'react';
import { Route } from 'react-router-dom';
import UserList from './Admin';
import Home from './Home';
import SignupForm from './SignupForm';

function Routes() {
  return (
    <div>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/admin">
        <UserList />
      </Route>
    </div>
  );
}

export default Routes;
