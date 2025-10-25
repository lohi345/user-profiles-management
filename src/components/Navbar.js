import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa"; // Import user-plus icon

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Brand with icon on the left */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/dashboard">
          <FaUserPlus className="me-2" /> {/* Icon on left with margin */}
          User Management
        </Link>

        {/* Navbar toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-lg-3" to="/add">+ Add User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

