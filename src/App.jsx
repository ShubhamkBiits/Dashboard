import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
 Navigate,
} from 'react-router-dom';

import './App.css';

const Home = () => (
  <div className="main-container">
    <p className="home-text">Home</p>
    <h1 className="welcome-txt">Welcome Shubham</h1>
  </div>
);

const Profile = () => (
  <div className="container">
    <h3>My Profile</h3>

    <div className="profile-details">

  <p>
    <strong>Designation:</strong> Junior Developer
  </p>

  <p>
    <strong>Employee ID:</strong> IT101
  </p>

  <p>
    <strong>Address:</strong> Electronic City Phase-II
  </p>

  <p>
    <strong>Shift Timings:</strong> 9 am - 7 pm (General Shift)
  </p>

</div>
  </div>
);

const Tasks = () => (
  <div className="container">
    <h3>My Tasks</h3>

    <div className="task-list">
      <p>
        <strong>Task 1:</strong> Completed
      </p>

      <p>
        <strong>Task 2:</strong> In Progress
      </p>

      <p>
        <strong>Task 3:</strong> Pending
      </p>

      <p>
        <strong>Task 4:</strong> In Progress
      </p>

      <p className="shift-note">
  <strong>Shift :</strong> 9 am - 7 pm (General Shift)
</p>
    </div>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert('Logged out');
  };

  if (!isAuthenticated) {
    return (
      <div className="login-placeholder">
        Please Login to continue.
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">

        <nav className="navbar">

          <div className="nav-left">
            <Link to="/home" className="nav-link">
              Home
            </Link>

            <Link to="/profile" className="nav-link">
              My Profile
            </Link>

            <Link to="/tasks" className="nav-link">
              My Tasks
            </Link>
          </div>

          <div className="nav-right">
            <div className="employee-info">
              <p>Shubham</p>
              <p>Employee</p>
              <p>IT101</p>
            </div>

            <button
              className="logout-box"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>

        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;