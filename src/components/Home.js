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
      transform: translateY(-75px);
    }
    50% {
        opacity: 1;
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
      width: 1%;
    }
    100% {
      width: 100%;
      opacity: 1;
      animation-fill-mode: forwards;
    }`;

  const titleAnimation = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
        opacity: 1;
        animation-fill-mode: forwards;
    }
  `;

  const Line = styled.svg`
    animation: ${line} 4s;
    width: 100%;
    height: 2rem;
  `;

  const NameAnimation = styled.h2`
    animation: ${nameAnimation} 2s;
  `;

  const TitleAnimation = styled.h3`
    animation: ${titleAnimation} 6s;
  `;

  const arrowAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

  const ArrowAnimation = styled.div`
    animation: ${arrowAnimation} 3s linear infinite;
    animation-delay: 6s;
    &:hover {
      opacity: 1;
    }
  `;

  const arrowVisible = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

  const ArrowVisible = styled.div`
    animation: ${arrowVisible} 7s linear;
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
                stroke="#FFF"
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
                stroke="#FFF"
                stroke-width="0.5rem"
              />
            </svg>
          </Line>
        </NameAnimation>
        <TitleAnimation>
          <h3 className="home__header-title">WEB developer</h3>
        </TitleAnimation>
      </div>
      <Link to="about" smooth={true} duration={1000}>
        <ArrowVisible div id="home__arrow">
          <ArrowAnimation className="home__arrow">
            <img src={arrow} alt="see more" />
          </ArrowAnimation>
        </ArrowVisible>
      </Link>
    </div>
  );
}

export default Home;
