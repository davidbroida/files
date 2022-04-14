import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Items";
import AddItem from "./AddItem"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);


  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();

      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/menu/:type">
              <Menu snacks={snacks} drinks={drinks} title="Snacks" />
            </Route>
            <Route exact path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/additem">
              <AddItem drinks={drinks} cantFind="/" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
