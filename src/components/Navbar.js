import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-menu">
      <div className="navbar-menu__element">
        <div className="navbar-menu__text" onClick={() => scroll.scrollToTop()}>
          Home
        </div>
      </div>
      <div className="navbar-menu__element">
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="navbar-menu__text"
        >
          About
        </Link>
      </div>
      <div className="navbar-menu__element">
        <Link
          to="portfolio"
          smooth={true}
          duration={1000}
          className="navbar-menu__text"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
