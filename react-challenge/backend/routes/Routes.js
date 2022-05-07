import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "../Login/LoginForm";



function Routes() {
  <div>
    <Switch>
      <Route exact path="/login">
        <LoginForm />
      </Route>
    </Switch>

  </div>
}

export default Routes;