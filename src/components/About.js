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
            <div className="about__icon">
              <img className="about__icon-logo" src={react} alt="React" />
              <div className="about__icon__name">React</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={js} alt="JavaScript" />
              <div className="about__icon__name">JavaScript</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={java} alt="Java" />
              <div className="about__icon__name">Java</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={html} alt="HTML5" />
              <div className="about__icon__name">HTML5</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={css} alt="CSS3" />
              <div className="about__icon__name">CSS3</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={sass} alt="Sass" />
              <div className="about__icon__name">Sass</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={vs} alt="VS Code" />
              <div className="about__icon__name">VS Code</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={git} alt="GIT" />
              <div className="about__icon__name">GIT</div>
            </div>
            <div className="about__icon">
              <img className="about__icon-logo" src={figma} alt="Figma" />
              <div className="about__icon__name">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
