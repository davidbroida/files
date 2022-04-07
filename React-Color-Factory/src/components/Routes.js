import React, { useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';
import FilterColors from './FilterColors';
import NewColorForm from './NewColorForm';

function Routes() {
  const initialColors = [
    {
      name: 'red'
    },
    {
      name: 'blue'
    },
    {
      name: 'green'
    }
  ];
  const [colors, updateColors] = useState(initialColors);
  const addColor = (color) => {
    updateColors((oldColors) => ({ ...oldColors, ...color }));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/:name">
          <FilterColors colors={colors} />
        </Route>
        <Route exact path="colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
