import React from "react";
import { ExternalLink } from "react-external-link";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import email from "../images/icons/email.svg";

function Footer() {
  return (
    <nav className="footer">
      <ul className="footer__links">
        <li>
          <ExternalLink
            // className="footer__icon"
            href="https://github.com/lyly2112"
          >
            <img src={github} alt="github" className="footer__icon" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            // className="footer__icon"
            href="https://www.linkedin.com/in/liliya-sherstobitova-322a4b125/"
          >
            <img src={linkedin} alt="linkedin" className="footer__icon" />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            // className="footer__icon"
            href="mailto: lyly2112@gmail.com"
          >
            <img src={email} alt="email" className="footer__icon" />
          </ExternalLink>
        </li>
      </ul>
      <h2 className="footer__copyright"> &copy; Liliya Sherstobitova</h2>
    </nav>
  );
}

export default Footer;
