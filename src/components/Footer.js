import React from "react";
import { ExternalLink } from "react-external-link";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import email from "../images/icons/email.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <ExternalLink  className="footer__icon" href="https://github.com/lyly2112">
          <img src={github} alt="github" />
        </ExternalLink>
        <ExternalLink  className="footer__icon" href="https://www.linkedin.com/in/liliya-sherstobitova-322a4b125/">
          <img src={linkedin} alt="linkedin" />
        </ExternalLink>
        <ExternalLink className="footer__icon" href="mailto: lyly2112@gmail.com">
          <img  src={email} alt="email" />
        </ExternalLink>
      </div>
      <h2 className="footer__copyright">	&copy; Liliya Sherstobitova</h2>
    </div>
  );
}

export default Footer;
