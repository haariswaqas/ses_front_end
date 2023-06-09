import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Navbar() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-white me-3" to="/">
            <strong>School of Engineering Sciences - UG</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/student_profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/student_info_entry">
                  Student Enrollment
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/registration">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-light me-2" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
