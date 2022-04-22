import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '../alert/Alert';

function LoginForm({ login }) {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState([]);
  const INITIAL_STATE = {
    username: '',
    password: ''
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push('/companies');
      alert(`Welcome ${name}, you are now logged in!`);
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Password:</label>
      <input
        id="password"
        type="text"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}
      <button>Log In</button>
    </form>
  );
}
export default LoginForm;
