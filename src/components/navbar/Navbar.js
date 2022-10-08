import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="container">
    <div className="navbar">
      <h1>BookStore CMS</h1>
      <Link className="nav-item" to="/">Books</Link>
      <Link className="nav-item" to="/Categories">Categories</Link>
    </div>
    <img className="user" src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-User-users-those-icons-flat-those-icons-4.png" alt="user" />
  </div>
);

export default Navbar;
