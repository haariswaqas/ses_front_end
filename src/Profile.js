import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './NavBar';

import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const studentProfiles = {
    student_id: '10947015',
    first_name: 'Haaris',
    middle_name: 'Ali',
    last_name: 'Waqas',
    profile_pic: 'https://cdn2.vectorstock.com/i/1000x1000/76/01/education-icon-male-student-person-profile-avatar-vector-25957601.jpg',
    gender: 'Male',
    date_of_birth: '18th May, 2001',
    age: 22,
    shs: "Presbyterian Boys' Secondary School, Legon (PRESEC)",
    department: 'Computer Engineering (CPEN)',
    admission_year: '2022',
    level: 'Level 200 (2nd Year)',

    email: 'hawaqas@st.ug.edu.gh',
    phone_number: '+233509241751',
    bio: 'Haaris Ali Waqas is a second-year computer engineering student at UG with a passion for technology and web development. Born and raised in Ghana, but originally from Pakistan, Haaris has always been drawn to the exciting world of computing and its limitless possibilities. Ever since he was young, Haaris has been fascinated by the way technology has the power to shape our world and improve our lives. This fascination eventually led him to pursue a degree in computer engineering, where he hopes to learn all he can about this rapidly evolving field. In addition to his academic pursuits, Haaris is also an avid poet and writer. He spends his free time crafting beautiful, thought-provoking pieces that have been published on a number of websites. Through his writing, Haaris hopes to inspire and uplift others, just as technology has inspired and uplifted him. With a combination of technical skill and creative flair, Haaris is poised to make a real impact in the world of web development. Whether he is building elegant, user-friendly websites or penning inspiring poems, Haaris is a true force to be reckoned with.'
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
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <img src={studentProfiles.profile_pic} alt={studentProfiles.first_name + ' ' + studentProfiles.last_name} className="card-img-top" />
            <Link
                to="/dashboard"
                className="nav-link text-dark"
                
              >
                {studentProfiles.first_name.endsWith('s')
                  ? `${studentProfiles.first_name}' Dashboard`
                  : `${studentProfiles.first_name}'s Dashboard`}
              </Link>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              {studentProfiles.middle_name !== null ? (
                <h5 className="card-title mb-0">{studentProfiles.last_name} {studentProfiles.first_name} {studentProfiles.middle_name}</h5>
              ) : (
                <h5 className="card-title mb-0">{studentProfiles.first_name} {studentProfiles.last_name}</h5>
              )}
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <div className="bio">
                <p>{studentProfiles.bio}</p>

                </div>
           
                <tbody>
                  <tr>
                    <th scope="row">Student ID</th>
                    <td>{studentProfiles.student_id}</td>
                    
                  </tr>
                  <tr>
                    <th scope="row">Gender</th>
                    <td>{studentProfiles.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row">Date of Birth</th>
                    <td>{studentProfiles.date_of_birth}</td>
                  </tr>
                  <tr>
                    <th scope="row">Age</th>
                    <td>{studentProfiles.age}</td>
                  </tr>
                  <tr>
                    <th scope="row">SHS</th>
                    <td>{studentProfiles.shs}</td>
                  </tr>
                  <tr>
                    <th scope="row">Department</th>
                    <td>{studentProfiles.department}</td>
                  </tr>
                  <tr>
                    <th scope="row">Admission Year</th>
                    <td>{studentProfiles.admission_year}</td>
                  </tr>
                  <tr>
                    <th scope="row">Level</th>
                    <td>{studentProfiles.level}</td>
                  </tr>
              
                  <tr>
                    <th scope="row">Email</th>
                    <td>{studentProfiles.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone Number</th>
                    <td>{studentProfiles.phone_number}</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
