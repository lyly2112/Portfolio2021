import React from "react";
import { ExternalLink } from "react-external-link";
import git from "../images/icons/git.png";
import linkedin from "../images/icons/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <ExternalLink href="https://github.com/lyly2112">
        <img className="footer__icon" src={git} alt="github" />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/liliya-sherstobitova-322a4b125/">
        <img className="footer__icon" src={linkedin} alt="linkedin" />
      </ExternalLink>
    </div>
  );
}

export default Footer;
