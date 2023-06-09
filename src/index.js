import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navbar from './NavBar';
import Profile from './Profile';
import StudentInfoEntry from './StudentInfoEntry';

import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/student_profile" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/student_info_entry" element={<StudentInfoEntry/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


