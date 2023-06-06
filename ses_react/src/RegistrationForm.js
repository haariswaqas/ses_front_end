import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function RegistrationForm() {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2 className="mb-2">Student Registration</h2>
          {error && <div className="error alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label className="form-label">
              Student ID:
              <input
                type="text"
                className="form-control"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Student Name:
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Student Mail:
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password:
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>

        {/* Display registered data */}
        {registeredData && (
          <div className="mt-3">
            <h2>New Student</h2>
            <p>Student ID: {registeredData.studentID}</p>
            <p>Name: {registeredData.name}</p>
            <p>Email: {registeredData.email}</p>
            <p>Password: {registeredData.password}</p>
          </div>
        )}

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
  );
}
