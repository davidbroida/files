import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  });

  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push('/companies');
      alert(`Account successfully created!`);
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        id="email"
        type="text"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
