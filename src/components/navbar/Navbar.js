import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <div className="navbar">
      <h1>BookStore CMS</h1>
      <Link className="nav-item" to="/">Books</Link>
      <Link className="nav-item" to="/Categories">Categories</Link>
    </div>
    <img className="user" src="../images/person.png" alt="user" />
  </div>
);

export default Navbar;
