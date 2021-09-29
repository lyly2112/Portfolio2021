import React from "react";
import java from "../images/icons/java.svg";
import js from "../images/icons/js.svg";
import react from "../images/icons/react.svg";
import css from "../images/icons/css.svg";
import git from "../images/icons/git.svg";
import html from "../images/icons/html.svg";
import sass from "../images/icons/sass.svg";
import vs from "../images/icons/vs.svg";
import figma from "../images/icons/figma.svg";
import selenium from "../images/icons/selenium.svg";
import wordpress from "../images/icons/wordpress.svg";
import { useInView } from "react-intersection-observer";
import "animate.css/animate.min.css";
import { useEffect } from "react";
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

  const animateCSS = (element, animation, prefix = "animate__") =>
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
      node.classList.add(`${prefix}animated`, animationName);
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }
      node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });

  return (
    <div className="about" id="about">
      <div className="about__header-wrap">
        <h2
          ref={ref}
          className={`${
            inView ? "header-animation-type" : "header-animation-wipe"
          }`}
        >
          About
        </h2>
      </div>

      <p className="about__bio">
        Full Stack Enthusiast. Focused on creating responsive web apps using
        JavaScript & React. Strong background in building beautiful WordPress
        websites. Expertise in Test Automation via Selenium methodology.
        Constant learner.
      </p>
      <div className="about__skills">
        {/* <h2 className="about__header">Tools</h2> */}
        <ul className="about__icons">
          <li className="about__icon">
            <img
              className="about__icon-logo react"
              src={react}
              alt="React"
              onMouseEnter={() => animateCSS(".react", "rotateIn")}
              onMouseLeave={() => animateCSS(".react", "rotateOut")}
            />
            <div className="about__icon__name">React</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo js"
              src={js}
              alt="JavaScript"
              onMouseEnter={() => animateCSS(".js", "rubberBand")}
              onMouseLeave={() => animateCSS(".js", "rubberBand")}
            />
            <div className="about__icon__name">JavaScript</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo java"
              src={java}
              alt="Java"
              onMouseEnter={() => animateCSS(".java", "bounce")}
              onMouseLeave={() => animateCSS(".java", "bounce")}
            />
            <div className="about__icon__name">Java</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo html"
              src={html}
              alt="HTML5"
              onMouseEnter={() => animateCSS(".html", "pulse")}
              onMouseLeave={() => animateCSS(".html", "pulse")}
            />
            <div className="about__icon__name">HTML5</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo css"
              src={css}
              alt="CSS3"
              onMouseEnter={() => animateCSS(".css", "swing")}
              onMouseLeave={() => animateCSS(".css", "swing")}
            />
            <div className="about__icon__name">CSS3</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo sass"
              src={sass}
              alt="Sass"
              onMouseEnter={() => animateCSS(".sass", "tada")}
              onMouseLeave={() => animateCSS(".sass", "tada")}
            />
            <div className="about__icon__name">Sass</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo vs"
              src={vs}
              alt="VS Code"
              onMouseEnter={() => animateCSS(".vs", "heartBeat")}
              onMouseLeave={() => animateCSS(".vs", "heartBeat")}
            />
            <div className="about__icon__name">VS Code</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo git"
              src={git}
              alt="GIT"
              onMouseEnter={() => animateCSS(".git", "jello")}
              onMouseLeave={() => animateCSS(".git", "jello")}
            />
            <div className="about__icon__name">GIT</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo figma"
              src={figma}
              alt="Figma"
              onMouseEnter={() => animateCSS(".figma", "hinge")}
              onMouseLeave={() => animateCSS(".figma", "hinge")}
            />
            <div className="about__icon__name">Figma</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo selenium"
              src={selenium}
              alt="Selenium"
              onMouseEnter={() => animateCSS(".selenium", "rubberBand")}
              onMouseLeave={() => animateCSS(".selenium", "rubberBand")}
            />
            <div className="about__icon__name">Selenium</div>
          </li>
          <li className="about__icon">
            <img
              className="about__icon-logo wordpress"
              src={wordpress}
              alt="Wordpress"
              onMouseEnter={() => animateCSS(".wordpress", "rotateIn")}
              onMouseLeave={() => animateCSS(".wordpress", "rotateOut")}
            />
            <div className="about__icon__name">Wordpress</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
