import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';
// import './App.css';

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <FilterDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
