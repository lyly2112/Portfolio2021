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

    49% {
        opacity: 1;
        -webkit-transform: translate(0);
        transform: translate(0);
    }
  `;

  const line = keyframes`
    0% {
      width: 0;
      opacity: 0;
    }

    49% {
      width: 0;
      opacity: 0;
    }

    50% {
      opacity: 1;
            transation: width 10s;
      width: 1%;
    }

    100% {
      width: 100%;
      opacity: 1;
      animation-fill-mode: forwards;
    }`;

  const Line = styled.svg`
    animation: ${line} 2s;
    width: 100%;
    height: 2rem;
  `;

  const NameAnimation = styled.h2`
    animation: ${nameAnimation} 5s;
  `;

  const arrowAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  50% {
    opacity: 0.4;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

  const ArrowAnimation = styled.div`
    animation: ${arrowAnimation} 3s linear infinite;
  `;

  return (
    <div className="home">
      <div className="home__header">
        <NameAnimation>
          <Line>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="100"
                stroke="#60e5ec"
                stroke-width="0.5rem"
              />
            </svg>
          </Line>
          <h2 className="home__header-name">Liliya Sherstobitova</h2>
          <Line>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="#60e5ec"
                stroke-width="0.5rem"
              />
            </svg>
          </Line>
        </NameAnimation>
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
