import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import JoblyApi from './api/api';
import NavBar from './routes/NavBar';
import Home from './homepage/Home';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail';
import JobList from './jobs/JobList';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import ProfileForm from './profiles/ProfileForm';
// import jwt from 'jsonwebtoken';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './auth/UserContext';
import Routes from './routes/Routes';

export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(true);
  const [jobs, setJobs] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  // useEffect(function loadUserInfo() {
  //   async function getCurrentUser() {
  //     if (token) {
  //       try {
  //         let { username } = jwt.decode(token);
  //         JoblyApi.token = token;
  //         let currentUser = await JoblyApi.getCurrentUser(username);
  //         setCurrentUser(currentUser);
  //       } catch (err) {
  //         console.error('App function loadUserInfo encountered a problem loading the user.', err);
  //         setCurrentUser(null);
  //       }
  //     }
  //     setInfoLoaded(true);
  //   }

  //   setInfoLoaded(false);
  //   getCurrentUser();
  // }, []);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      let jobs = await JoblyApi.getJobs();
      setCompanies(companies);
      setJobs(jobs);
      // setIsLoading(false);
    }
    getCompanies();
  }, []);

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('signup failed', errors);
      return { succes: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
        <div>
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
