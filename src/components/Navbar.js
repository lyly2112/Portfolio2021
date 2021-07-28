import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__column--left">
        <div className="navbar__element">
          <div className="navbar__text" onClick={() => scroll.scrollToTop()}>
            Liliya Sherstobitova
          </div>
        </div>
      </div>
      <div className="navbar__column--right">
        <div className="navbar__element">
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="navbar__text"
          >
            About
          </Link>
        </div>
        <div className="navbar__element">
          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            className="navbar__text"
          >
            Portfolio
          </Link>
        </div>
        <div className="navbar__element">
          <Link
            to="footer"
            smooth={true}
            duration={1000}
            className="navbar__text"
          >
            Links
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
