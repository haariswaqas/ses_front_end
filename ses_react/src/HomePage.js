import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function HomePage() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Helmet>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="home-page">
          <h1 className="home-page__title">Welcome to the Home Page</h1>
          <div className="home-page__buttons">
            <Link to="/registration" className="btn btn-primary mx-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
