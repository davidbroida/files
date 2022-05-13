import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/MMLogoBlack.png';
import FlashMessage from 'react-flash-message'
import Alert from '../alerts/Alert'

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      window.alert("Account created successfully!");
      history.push("/");
    } else {
      setFormErrors(result.errors.map(err => err.slice(9)));
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div className="SignupForm">
      <div className="container mt-5 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="card">
          <a className="mt-3"><img src={logo} /></a>
          <p className="mb-0 mt-2 text-dark"><b>Create an account!</b></p>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="">Username</label>
                <input
                  name="username"
                  placeholder="Create a username.."
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
                  placeholder="Create a password.."
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="">First name</label>
                <input
                  name="firstName"
                  placeholder="Enter your first name.."
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="">Last name</label>
                <input
                  name="lastName"
                  placeholder="Enter your last name.."
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail address.."
                  className="form-control"
                  value={formData.email}
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

export default SignupForm;