import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';
import './RegistrationForm.css';

export default function RegistrationForm() {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registeredData, setRegisteredData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (studentID.trim() === '') {
      setError('Please enter your Student ID.');
      return;
    }
    if (name.trim() === '') {
      setError('Please enter your Name.');
      return;
    }
    if (email.trim() === '') {
      setError('Please enter your UG Student Mail.');
      return;
    }
    if (password.trim() === '') {
      setError('Please enter a valid Password.');
      return;
    }

    // If the form is valid, Perform data processing
    const data = {
      studentID,
      name,
      email,
      password,
    };

    // Set the registered data
    setRegisteredData(data);

    // Reset the form
    setStudentID('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <Navbar />

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="login-container registration-form">
          <form onSubmit={handleSubmit}>
            <h2 className="login-title">Student Registration</h2>
            {error && <div className="error alert alert-danger">{error}</div>}
            <div className="form-group mb-3">
              <label htmlFor="studentID" className="login-label">
                Student ID:
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="studentID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="Enter student ID"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name" className="login-label">
                Student Name:
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="login-label">
                Student Mail:
              </label>
              <input
                type="text"
                className="form-control login-input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter student email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="login-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control login-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirm_password" className="login-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control login-input"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="login-button">
              Register
            </button>
          </form>

       

          <div className="login-footer">
            <p>
              Already have an account?{' '}
              <a href="/login" className="login-link">
                Sign In
              </a>
            </p>
            <a href="/" className="login-link">
              Back to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
