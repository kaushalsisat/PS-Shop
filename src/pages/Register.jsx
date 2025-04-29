// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add registration logic
    console.log('Register:', user);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4 rounded">
          <h2 className="mb-4 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
