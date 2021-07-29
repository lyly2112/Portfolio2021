import React from "react";
import { ExternalLink } from "react-external-link";
import git from "../images/icons/git.png";
import linkedin from "../images/icons/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <ExternalLink href="https://github.com/lyly2112">
          <img className="footer__icon" src={git} alt="github" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/liliya-sherstobitova-322a4b125/">
          <img className="footer__icon" src={linkedin} alt="linkedin" />
        </ExternalLink>
      </div>
      <div className="footer__copyright">	&copy; Liliya Sherstobitova</div>
    </div>
  );
}

export default Footer;
