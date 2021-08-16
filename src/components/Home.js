import React from "react";
//import Navbar from "./Navbar";
import arrow from "../images/icons/down-arrow.svg";
import styled, { keyframes } from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";

function Home() {
  const bounce = keyframes`
  0% {opacity: 1; } 
  50% {opacity: 0.4;}
   100% {opacity: 1;} 
    0% {transform: translateY(0px);  } 
    50% {transform: translateY(-30px);  } 
    100% {transform: translateY(0px);  }    
  `;

  const Bounce = styled.div`
    animation: ${bounce} 3s linear infinite;
  `;

  // const GlowInArrow = styled.div`
  // :hover {
  //     filter: drop-shadow(0px 5px 2px rgb(0 0 0 / 1));
  //     opacity: 1;
  //   }
  // `;

  return (
    <div className="home">
      <div className="home__header">
        {/* add drop effect */}
        <div className="home__header-name">Liliya Sherstobitova</div>
        {/* add follow up fade effect */}
        <div className="home__header-title">WEB developer</div>
      </div>

      <Link to="about" smooth={true} duration={1000} className="navbar__text">
        <Bounce id="home__arrow">
          <div className="home__arrow">
            <img className="home__arrow-down" src={arrow} alt="see more" />
          </div>
        </Bounce>
      </Link>
    </div>
  );
}

export default Home;
