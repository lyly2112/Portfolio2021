import React from "react";
import Reveal from "react-reveal/Reveal";

import java from "../images/icons/java.svg";
import js from "../images/icons/js.svg";
import react from "../images/icons/react.svg";
import css from "../images/icons/css.svg";
import git from "../images/icons/git.svg";
import html from "../images/icons/html.svg";
import sass from "../images/icons/sass.svg";
import vs from "../images/icons/vs.svg";
import figma from "../images/icons/figma.svg";
import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useState, useEffect } from "react";
import "animate.css";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView) {
      console.log("inView:", inView);
    } else {
      console.log("inView:", inView);
    }
  }, [inView]);

  const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


  return (
    <div className="about" id="about">
      <div className="about__content">
        <div className="about__text">
          {/* <div className="about__header-container">
            <div className="about__header"> */}
          <h2
            ref={ref}
            className={`${
              inView ? "header-animation-type" : "header-animation-wipe"
            }`}
          >
            About
          </h2>
          {/* </div>
          </div> */}
          <p className="about__bio">
            responsive websites
            testing background
            
            I think of myself as an artist within the head of a mathematician.
            Or in other words, I am a forward-thinking and value-driven Software
            Developer with over a year of experience in software and web
            development. I've built a strong background in building, integrating
            and supporting complex web applications as I had to work on tasks
            that were intended for a senior-level developer. Dedicated to
            continuously learn latest technology designs and patterns, adopting
            them to maximise development efficiency and produce innovative
            solutions. I apply proven technical, communication and
            problem-solving skills to achieve efficiency in every project I work
            on.
          </p>
        </div>
        <div className="about__skills">
          <div className="about__header">Skills</div>
          <div className="about__icons">
            <div className="about__icons__row">
            <div className="about__icon">
              <img className="about__icon-logo react" src={react} alt="React" 
                              onMouseEnter={() => animateCSS('.react', 'rotateIn')}
                              onMouseLeave={() => animateCSS('.react', 'rotateIn')}
              />
              <div className="about__icon__name">React</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo js" src={js} alt="JavaScript" 
              onMouseEnter={() => animateCSS('.js', 'rubberBand')}
              onMouseLeave={() => animateCSS('.js', 'rubberBand')}/>
              <div className="about__icon__name">JavaScript</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo java" src={java} alt="Java" 
               onMouseEnter={() => animateCSS('.java', 'bounce')}
               onMouseLeave={() => animateCSS('.java', 'bounce')}
              />
              <div className="about__icon__name">Java</div>
            </div>
            </div>
            <div className="about__icons__row">
            <div className="about__icon">
              <img
                className="about__icon-logo html"
                src={html}
                alt="HTML5"
                onMouseEnter={() => animateCSS('.html', 'pulse')}
                onMouseLeave={() => animateCSS('.html', 'pulse')}
              />
              <div className="about__icon__name">HTML5</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo css" src={css} alt="CSS3" 
              onMouseEnter={() => animateCSS('.css', 'swing')}
              onMouseLeave={() => animateCSS('.css', 'swing')}/>
              <div className="about__icon__name">CSS3</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo sass" src={sass} alt="Sass" 
               onMouseEnter={() => animateCSS('.sass', 'tada')}
               onMouseLeave={() => animateCSS('.sass', 'tada')}
               />
              <div className="about__icon__name">Sass</div>
            </div>
</div>
<div className="about__icons__row">
            <div className="about__icon">
              <img className="about__icon-logo vs" src={vs} alt="VS Code" 
               onMouseEnter={() => animateCSS('.vs', 'heartBeat')}
               onMouseLeave={() => animateCSS('.vs', 'heartBeat')}
               />
              <div className="about__icon__name">VS Code</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo git" src={git} alt="GIT" 
               onMouseEnter={() => animateCSS('.git', 'jello')}
               onMouseLeave={() => animateCSS('.git', 'jello')}
               />
              <div className="about__icon__name">GIT</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo figma" src={figma} alt="Figma" 
               onMouseEnter={() => animateCSS('.figma', 'hinge')}
              //  onMouseLeave={() => animateCSS('.figma', 'hinge')}
               />
              <div className="about__icon__name">Figma</div>
            </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
