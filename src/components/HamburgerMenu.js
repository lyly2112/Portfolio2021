import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

function HamburgerMenu() {
  return (
    <Menu
      //  className="navbar-mobile-menu"
      // pageWrapId={"app"}
      right
      // width={200}
      isOpen={false}
    >
      <ul className="navbar-mobile" id="navbar-mobile">
        {/* <div className="navbar-mobile__column--right"> */}
        <li className="navbar-mobile-element">
          <Link
            className="navbar-mobile-element__text"
            to="about"
            smooth={true}
            duration={1000}
          >
            About
          </Link>
        </li>
        <li className="navbar-mobile-element">
          <Link
            className="navbar-mobile-element__text"
            to="portfolio"
            smooth={true}
            duration={1000}
          >
            Portfolio
          </Link>
        </li>
        <li className="navbar-mobile-element">
          <Link
            className="navbar-mobile-element__text"
            to="footer"
            smooth={true}
            duration={1000}
          >
            Links
          </Link>
        </li>
      </ul>
      {/* </div> */}

      {/* <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a> */}

      {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    </Menu>
  );
}

export default HamburgerMenu;
