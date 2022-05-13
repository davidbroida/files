import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Alert from '../alerts/Alert';
import logo from '../images/MMLogoBlack.png';

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
      history.push('/');
      <Alert className="alert alert-success" type="success" messages="Login success!" />
      console.log('result:', result);
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container mt-5 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="card">
          <a className="mt-3"><img src={logo} /></a>
          <p className="mb-0 mt-2 text-dark"><b>Please login to continue</b></p>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="">Username</label>
                <input
                  name="username"
                  placeholder="Enter username.."
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password.."
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null
              }
              <hr />

              <button
                type="submit"
                className="btn btn-primary float-right"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div >
    </div >
  );
}

export default LoginForm;