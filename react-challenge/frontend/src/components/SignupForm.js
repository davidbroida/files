import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SignupForm({ user }) {
  const INITIAL_STATE = {
    id: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, firstName, lastName, email } = formData;
    setFormData(id, firstName, lastName, email);
    axios.post('http://localhost:5000/users', { id, firstName, lastName, email });
    alert(`Congratulations ${firstName}! You are now registerd.`);
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h1>Yodlr Registration Portal</h1>
      <form className="signupForm" onSubmit={handleSubmit}>
        <span className="form-text">Username:</span>
        <input
          id="username"
          className="input"
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <span className="form-text">Password:</span>
        <input
          id="password"
          className="input"
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span className="form-text">First name:</span>
        <input
          id="firstName"
          className="input"
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <span className="form-text">Last name:</span>
        <input
          id="lastName"
          className="input"
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <span className="form-text">Email:</span>
        <input
          id="email"
          className="input"
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br></br>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <div>
        <p className="home-links">
          <a href="/admin">Admin Page</a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
