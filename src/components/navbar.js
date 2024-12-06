import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Store</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/checkout">Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
