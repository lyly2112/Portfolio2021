import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   rootMargin: "-50px 0px",
  // });

  // useEffect(() => {
  //   if (inView) {
  //     console.log("inView:", inView);
  //   } else {
  //     console.log("inView:", inView);
  //   }
  // }, [inView]);
  // showSettings (event) {
  //   event.preventDefault();

  // }
  return (
    // <div className="navbar">
    //   <div className="navbar-desktop">
    //     <div className="navbar-desktop__column--left">
    //       <div className="navbar-desktop__element">
    //         <div
    //           className="navbar-desktop__text"
    //           onClick={() => scroll.scrollToTop()}
    //         >
    //           Liliya Sherstobitova
    //         </div>
    //       </div>
    //     </div>
    // <div className="navbar-desktop__column--right">
    //   <div className="navbar-desktop__element">
    //     <Link
    //       to="about"
    //       smooth={true}
    //       duration={1000}
    //       className="navbar-desktop__text"
    //     >
    //       About
    //     </Link>
    //   </div>
    //   <div className="navbar-desktop__element">
    //     <Link
    //       to="portfolio"
    //       smooth={true}
    //       duration={1000}
    //       className="navbar-desktop__text"
    //     >
    //       Portfolio
    //     </Link>
    //   </div>
    //   <div className="navbar-desktop__element">
    //     <Link
    //       to="footer"
    //       smooth={true}
    //       duration={1000}
    //       className="navbar-desktop__text"
    //     >
    //       Links
    //     </Link>
    //   </div>
    // </div>
    // </div>

    // </div>

    <header className="navbar">
      <h2 className="navbar-logo" onClick={() => scroll.scrollToTop()}>
        Liliya Sherstobitova
      </h2>

      {/* <Menu
            //  className="navbar-mobile-menu"
            // pageWrapId={"app"}
            right
            // width={200}
            isOpen={false}
          >
            <ul className="navbar-mobile" id="navbar-mobile">
              <li className="navbar-mobile-element">
                <Link to="about" smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li className="navbar-mobile-element">
                <Link to="portfolio" smooth={true} duration={1000}>
                  Portfolio
                </Link>
              </li>
              <li className="navbar-mobile-element">
                <Link to="footer" smooth={true} duration={1000}>
                  Links
                </Link>
              </li>
            </ul>
                
          </Menu> */}

      <div className="menu">
        <HamburgerMenu />

        <nav className="navbar-desktop-menu">
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
      </div>
    </header>
  );
}

export default Navbar;
