import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import WelcomePage from './WelcomePage';
import SignupForm from '../auth/SignupForm';
import LoginForm from '../auth/LoginForm';
import SearchPage from './SearchPage'


function Routes({ signup, login }) {
  return (
    <div className="Routes">
      <Switch>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/search">
          <SearchPage />
        </Route>

        <Route>
          <div className="page-nf">
            <p>Whoops! The page you're trying to visit doesn't exist.</p>
          </div>
        </Route>

      </Switch>
    </div >
  );
}

export default Routes;
