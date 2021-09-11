import React from "react";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { slide as Menu } from 'react-burger-menu'

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
    //     <div className="navbar-desktop__column--right">
    //       <div className="navbar-desktop__element">
    //         <Link
    //           to="about"
    //           smooth={true}
    //           duration={1000}
    //           className="navbar-desktop__text"
    //         >
    //           About
    //         </Link>
    //       </div>
    //       <div className="navbar-desktop__element">
    //         <Link
    //           to="portfolio"
    //           smooth={true}
    //           duration={1000}
    //           className="navbar-desktop__text"
    //         >
    //           Portfolio
    //         </Link>
    //       </div>
    //       <div className="navbar-desktop__element">
    //         <Link
    //           to="footer"
    //           smooth={true}
    //           duration={1000}
    //           className="navbar-desktop__text"
    //         >
    //           Links
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    // </div>
<div id="outer-container">

    <Menu pageWrapId={ "navbar-mobile" } right width={ 280 } isOpen={false}>

   <div className="navbar-mobile" id="navbar-mobile">
<div className="navbar-mobile__column--left">
           <div className="navbar-mobile__element">
             <div
              className="navbar-mobile__text"
              onClick={() => scroll.scrollToTop()}
            >
              Liliya Sherstobitova
            </div>
          </div>
        </div>
        <div className="navbar-mobile__column--right">
          <div className="navbar-mobile__element">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="navbar-mobile__text"
            >
              About
            </Link>
          </div>
          <div className="navbar-mobile__element">
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              className="navbar-mobile__text"
            >
              Portfolio
            </Link>
          </div>
          <div className="navbar-mobile__element">
            <Link
              to="footer"
              smooth={true}
              duration={1000}
              className="navbar-mobile__text"
            >
              Links
            </Link>
          </div>
        </div>
      </div>


    {/* <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a> */}


    {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
  </Menu>
</div>
  );
}

export default Navbar;
