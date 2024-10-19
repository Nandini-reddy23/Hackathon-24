// frontend/src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeacherProfile from './components/TeacherProfile';
import CourseSelectionForm from './components/CourseSelection';
import FeedbackForm from './components/FeedbackForm';
import './App.css'; // Importing any global styles

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">Course Selection System</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Teacher Profile</Link></li>
          <li><Link to="/courseSelection">Course Selection</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<TeacherProfile />} />
        <Route path="/courseSelection" element={<CourseSelectionForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

// Home Component for Homepage
function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to the Course Selection and Teacher Assignment System</h1>
        <p>
          <b>
            Select your courses and teachers for the semester with ease. Explore teacher profiles and provide feedback based on your experience.
          </b>
        </p>
      </div>

      <div className="student-login-container">
        <div className="profile-box">
         
          <h2>Student Login/Register</h2>
          <p>Please login to your account or register as a new user.</p>
          <div className="button-container">
            <Link to="/login" className="btn btn-student">Login</Link>
            <Link to="/register" className="btn btn-teacher">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
