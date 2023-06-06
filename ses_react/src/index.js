import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navbar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          
        </Routes>
      
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
