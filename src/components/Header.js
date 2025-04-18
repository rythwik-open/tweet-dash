// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <h2>Tweet Dashboard</h2>
      <ul className="nav-links">
        <li><Link to="/">Upload Posts</Link></li>
        <li><Link to="/upcoming">Upcoming Posts</Link></li>
        <li><Link to="/posted">Posted Tweets</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
