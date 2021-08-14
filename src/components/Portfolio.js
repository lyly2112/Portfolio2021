import React, { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";
import dianawebb from "../images/portfolio/dianawebb.JPG";
import sergeinikiforov from "../images/portfolio/sergeinikiforov.JPG";
import majesticbay from "../images/portfolio/majesticbay.JPG";
import styled, { keyframes } from "styled-components";

// add "glow-out" animation

function Portfolio() {
  const GlowIn = styled.div`
    :hover {
      box-shadow: 2px 2px 14px 1px rgb(0 0 0 / 40%);
    }
  `;

  return (
    <div className="portfolio">
      <div className="portfolio__header">Portfolio</div>
      <div className="portfolio__projects">
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://github.com/MajesticBay/diana-webb">
            <img
              className="portfolio__project-image"
              src={dianawebb}
              alt="dianawebb.us"
            />
          </ExternalLink>
          <div className="portfolio__project-header">Diana Webb</div>
          <div className="portfolio__project-tools">
            <div className="portfolio__project-tool">React</div>
            <div className="portfolio__project-tool">JS</div>
            <div className="portfolio__project-tool">Sass</div>
            <div className="portfolio__project-tool">Gatsby</div>
          </div>
        </GlowIn>
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://github.com/lyly2112/nikiforov">
            <img
              className="portfolio__project-image"
              src={sergeinikiforov}
              alt="https://nikiforov.netlify.app/"
            />
          </ExternalLink>
          <div className="portfolio__project-header">Sergei Nikiforov</div>
          <div className="portfolio__project-tools">
            <div className="portfolio__project-tool">React</div>
            <div className="portfolio__project-tool">JS</div>
            <div className="portfolio__project-tool">Sass</div>
            <div className="portfolio__project-tool">Emailjs</div>
          </div>
        </GlowIn>
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://github.com/lyly2112/MajesticBay">
            <img
              className="portfolio__project-image"
              src={majesticbay}
              alt="https://majesticbay.netlify.app/"
            />
          </ExternalLink>
          <div className="portfolio__project-header">Majestic Bay</div>
          <div className="portfolio__project-tools">
            <div className="portfolio__project-tool">React</div>
            <div className="portfolio__project-tool">JS</div>
            <div className="portfolio__project-tool">Bootstrap</div>
          </div>
        </GlowIn>
      </div>
    </div>
  );
}

export default Portfolio;
