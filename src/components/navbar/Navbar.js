import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <h1>BookStore CMS</h1>
    <div className="navbar">
      <div className="nav-item">
        <Link to="/">Books</Link>
      </div>
      <div className="nav-item">
        <Link to="/Categories">Categories</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
