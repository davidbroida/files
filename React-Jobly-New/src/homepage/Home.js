import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const INITIAL_STATE = [{ id: uuid(), name: '', username: '', password: '' }];

const Home = () => {
  const [users, setUsers] = useState(INITIAL_STATE);
  const addUser = (id, name, username, password) => {
    setUsers((users) => [...users, { id: uuid(), name, username, password }]);
  };
  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default Home;
