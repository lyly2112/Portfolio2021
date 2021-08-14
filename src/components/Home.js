import React from "react";
//import Navbar from "./Navbar";
import arrow from "../images/icons/down-arrow.svg";
import styled, { keyframes } from "styled-components";

function Home() {
  
  const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-30px);} 
   60% {transform: translateY(-15px);} 
  `;

  const Bounce = styled.div`
    animation: ${bounce} 5s linear infinite;
  `;

  return (
    <div className="home">
      <div className="home__header">
        //add drop effect
        <div className="home__header-name">Liliya Sherstobitova</div>
        //add follow up fade effect
        <div className="home__header-title">WEB developer</div>
        //add arrow button with bounce and fade effect when up and bright down
      </div>
      <Bounce>
        <div>
          <img className="home__arrow" src={arrow} alt="see more" />
        </div>
      </Bounce>
    </div>
  );
}

export default Home;
