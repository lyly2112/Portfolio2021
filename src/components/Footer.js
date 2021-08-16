import React from "react";
import { ExternalLink } from "react-external-link";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <ExternalLink href="https://github.com/lyly2112">
          <img className="footer__icon" src={github} alt="github" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/liliya-sherstobitova-322a4b125/">
          <img className="footer__icon" src={linkedin} alt="linkedin" />
        </ExternalLink>
      </div>
      <h2 className="footer__copyright">	&copy; Liliya Sherstobitova</h2>
    </div>
  );
}

export default Footer;
