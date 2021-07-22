import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="navbar-menu">
        <div className="navbar-menu__element">
          <Link to="/" className="navbar-menu__text">Home</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/about" className="navbar-menu__text">About</Link>
        </div>
        <div className="navbar-menu__element">
          <Link to="/portfolio" className="navbar-menu__text">Portfolio</Link>
        </div>
      </div>
  )
}

export default Navbar;
