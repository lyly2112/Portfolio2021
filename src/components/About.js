import React from "react";
import java from "../images/icons/java.svg";
import js from "../images/icons/js.svg";
import react from "../images/icons/react.svg";
import css from "../images/icons/css.png";
import git from "../images/icons/git.png";
import html from "../images/icons/html.png";
import sass from "../images/icons/sass.svg";
import vs from "../images/icons/vs.png";
import { Link } from "react-scroll";

function About() {

  // const headerScroll = document.querySelector(".header-scroll");

  // const options = {};

  // const observer = new IntersectionObserver(function (entries, observer) {
  //   entries.forEach((entry) => {
  //     console.log(entry.target);
  //   });
  // }, options);

  // observer.observe(headerScroll);

  return (
    <div className="about" id="about">
      {/* <div className="about__empty-container"></div> */}
      <div className="about__content">
        <div className="about__text">
          <h3 className="about__header header-scroll">About</h3>
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
        <div className="about__icons">
          <div className="about__icons-header">Skills</div>
          <div className="about__icons-icons">
            <div className="about__icons__icon">
              <img
                className="about__icons__icon__logo"
                src={react}
                alt="React"
              />
              <div className="about__icons__icon__name">React</div>
            </div>
            <div className="about__icons__icon">
              <img
                className="about__icons__icon__logo"
                src={js}
                alt="JavaScript"
              />
              <div className="about__icons__icon__name">JavaScript</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={java} alt="Java" />
              <div className="about__icons__icon__name">Java</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={html} alt="HTML5" />
              <div className="about__icons__icon__name">HTML5</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={css} alt="CSS3" />
              <div className="about__icons__icon__name">CSS3</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={sass} alt="Sass" />
              <div className="about__icons__icon__name">Sass</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={vs} alt="VS Code" />
              <div className="about__icons__icon__name">VS Code</div>
            </div>
            <div className="about__icons__icon">
              <img className="about__icons__icon__logo" src={git} alt="GIT" />
              <div className="about__icons__icon__name">GIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
