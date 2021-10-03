import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="navbar-wrap">
      <header className="navbar">
        {/* <h2 className="navbar-logo" onClick={() => scroll.scrollToTop()}>
          Liliya Sherstobitova
        </h2> */}
        <nav className="navbar-desktop">
          <ul className="navbar-desktop-list">
            <li className="navbar-desktop-element">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="navbar-desktop-element__text"
              >
                About
              </Link>
            </li>
            <li className="navbar-desktop-element">
              <Link
                to="portfolio"
                smooth={true}
                duration={1000}
                className="navbar-desktop-element__text"
              >
                Portfolio
              </Link>
            </li>
            <li className="navbar-desktop-element">
              <Link
                to="footer"
                smooth={true}
                duration={1000}
                className="navbar-desktop-element__text"
              >
                Links
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-mobile">
          <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#fff", width: "40px", height: "40px" }}
              />
            )}
          </button>
          <ul className={`navbar-side-panel ${navbarOpen ? " showMenu" : ""}`}>
            <li className="navbar-mobile-element">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="navbar-mobile-element__text"
                onClick={() => closeMenu()}
              >
                About
              </Link>
            </li>
            <li className="navbar-mobile-element">
              <Link
                to="portfolio"
                smooth={true}
                duration={1000}
                className="navbar-mobile-element__text"
                onClick={() => closeMenu()}
              >
                Portfolio
              </Link>
            </li>
            <li className="navbar-mobile-element">
              <Link
                to="footer"
                smooth={true}
                duration={1000}
                className="navbar-mobile-element__text"
                onClick={() => closeMenu()}
              >
                Links
              </Link>
            </li>
          </ul>
        </nav>
        {/* </div> */}
      </header>
    </div>
  );
}

export default Navbar;
