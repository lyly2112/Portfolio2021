import React from "react";
import java from "../images/tools/java.svg";
import js from "../images/tools/js.svg";
import react from "../images/tools/react.svg";
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
          <div className="about__bio">
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
          </div>
        </div>
        <div className="about__tools">
          <div className="about__tools-header">Skills</div>
          <div className="about__tools-icons">
            <div className="about__tools__icon">
              <img
                className="about__tools__icon__logo"
                src={react}
                alt="React"
              />
              <div className="about__tools__icon__name">React</div>
            </div>
            <div className="about__tools__icon">
              <img
                className="about__tools__icon__logo"
                src={js}
                alt="JavaScript"
              />
              <div className="about__tools__icon__name">JavaScript</div>
            </div>
            <div className="about__tools__icon">
              <img className="about__tools__icon__logo" src={java} alt="Java" />
              <div className="about__tools__icon__name">Java</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
