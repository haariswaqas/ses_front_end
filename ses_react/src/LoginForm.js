import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function LoginForm() {
  const [studentID, setStudentID] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (studentID.trim() === '') {
      setError('Please enter your Student ID.');
      return;
    }
    if (pin.trim() === '') {
      setError('Please enter your PIN.');
      return;
    }

    // If the form is valid, perform login processing
    const data = {
      studentID,
      pin,
    };

    // Set the login data
    setLoginData(data);

    // Reset the form
    setStudentID('');
    setPin('');
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
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <h2 className="login-title">Student Login</h2>
            <div className="form-group mb-3">
              <label htmlFor="username" className="login-label">
                Student ID:
              </label>
              <input
                type="text"
                className="form-control login-input"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
                placeholder="Enter student ID"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="login-label">
                PIN:
              </label>
              <input
                type="number"
                className="form-control login-input"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
              />
            </div>
            <button type="submit" className="btn btn-primary login-button">
              Log In
            </button>
          </form>

          {/* Display error message if any */}
          {error && <p className="error-message">{error}</p>}

          {/* Display login data */}
          {loginData && (
            <div>
              <h2>Student Login Data</h2>
              <p>Student ID: {loginData.studentID}</p>
              <p>PIN: {loginData.pin}</p>
            </div>
          )}
          <div className="login-footer">
            <p>
              Don't have an account?{' '}
              <a href="/registration" className="login-link">
                Sign up
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

export default LoginForm;
