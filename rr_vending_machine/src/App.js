import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Home from './components/Home';
import Cookies from './components/Cookies';
import Doritos from './components/Doritos';
import Snickers from './components/Snickers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Cookies">
          <Cookies />
        </Route>
        <Route exact path="/Doritos">
          <Doritos />
        </Route>
        <Route exact path="/Snickers">
          <Snickers />
        </Route>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
