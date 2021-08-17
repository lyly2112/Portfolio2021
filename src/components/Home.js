import React from "react";
//import Navbar from "./Navbar";
import arrow from "../images/icons/down-arrow.svg";
import styled, { keyframes } from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

function Home() {
  const nameAnimation = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(-75px);
    transform: translateY(-75px);
}

10% {
    opacity: 0;
    -webkit-transform: translateY(-75px);
    transform: translateY(-75px);
}
100% {
    opacity: 1;
    -webkit-transform: translate(0);
    transform: translate(0);
}
  `;

  const NameAnimation = styled.h2`
    animation: ${nameAnimation} 2s;
  `;

  const arrowAnimation = keyframes`
  0% {opacity: 1; 
  transform: translateY(0px); } 
  50% {opacity: 0.4;
  transform: translateY(-30px);}
   100% {opacity: 1;
  transform: translateY(0px); 
  } 
 
  `;

  const ArrowAnimation = styled.div`
    animation: ${arrowAnimation} 3s linear infinite;
  `;

  return (
    <div className="home">
      <div className="home__header">
        {/* add drop effect */}
        <NameAnimation>
          <h2 className="home__header-name">Liliya Sherstobitova</h2>
        </NameAnimation>
        {/* add follow up fade effect */}
        <div className="home__header-title">WEB developer</div>
      </div>
      <Link to="about" smooth={true} duration={1000} className="navbar__text">
        <ArrowAnimation id="home__arrow">
          <div className="home__arrow">
            <img className="home__arrow-down" src={arrow} alt="see more" />
          </div>
        </ArrowAnimation>
      </Link>
    </div>
  );
}

export default Home;
