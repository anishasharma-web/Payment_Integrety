// components/Shared/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/bills">Bills</Link></li>
        <li><Link to="/add-bill">Add Bill</Link></li>
        <li><Link to="/make-payment">Make Payment</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
