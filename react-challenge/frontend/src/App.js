import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import companyApi from './api/api';
// import SignupForm from './components/SignupForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
