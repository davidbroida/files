import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './components/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from './hooks/useLocalStorage';
import MusicMatchApi from './api/api';
import jwt_decode from 'jwt-decode';
import UserContext from './auth/UserContext';
// import jwt from 'jsonwebtoken';
import './App.css';

export const TOKEN_STORAGE_ID = "music_match-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  let [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(true);


  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          MusicMatchApi.token = token;
          let currentUser = await MusicMatchApi.getCurrentUser(username);
          setCurrentUser(currentUser);

        } catch (err) {
          console.error('App function loadUserInfo encountered a problem loading the user.', err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  async function signup(signupData) {
    try {
      let token = await MusicMatchApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('signup failed', errors);
      return { succes: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await MusicMatchApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.clear()
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <NavBar logout={logout} />
          <Routes signup={signup} login={login} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
