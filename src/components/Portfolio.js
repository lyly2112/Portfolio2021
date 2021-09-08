import React, { useEffect, useState } from "react";
import { ExternalLink } from "react-external-link";
import dianawebb from "../images/portfolio/dianawebb.JPG";
import sergeinikiforov from "../images/portfolio/sergeinikiforov.JPG";
import majesticbay from "../images/portfolio/majesticbay.JPG";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import globe from "../images/icons/globe.svg";
import git from "../images/icons/git.svg";
// add "glow-out" animation

function Portfolio() {
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

  const GlowIn = styled.div`
    :hover {
      box-shadow: 2px 2px 14px 1px rgb(0 0 0 / 40%);
    }
  `;

  return (
    <div className="portfolio">
      <h2
        ref={ref}
        className={`${
          inView ? "header-animation-type" : "header-animation-wipe"
        }`}
      >
        Portfolio
      </h2>
      <div className="portfolio__projects">
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://dianawebb.us/">
            <img
              className="portfolio__project-image"
              src={dianawebb}
              alt="https://dianawebb.us/"
            />
          </ExternalLink>
          <div className="portfolio__project-header">
            <h3 className="portfolio__project-header-text">Diana Webb</h3>
            <div className="portfolio__project-header-links">
              <ExternalLink href="https://dianawebb.us/">
                <img
                  className="portfolio__project-header-icon"
                  src={globe}
                  alt="https://dianawebb.us/"
                />
              </ExternalLink>
              <ExternalLink href="https://github.com/MajesticBay/diana-webb">
                <img
                  className="portfolio__project-header-icon"
                  src={git}
                  alt="https://github.com/MajesticBay/diana-webb"
                />
              </ExternalLink>
            </div>
            <div className="portfolio__project-tools">
              <div className="portfolio__project-tool">React</div>
              <div className="portfolio__project-tool">JS</div>
              <div className="portfolio__project-tool">Sass</div>
              <div className="portfolio__project-tool">Gatsby</div>
            </div>
          </div>
        </GlowIn>
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://nikiforov.netlify.app/">
            <img
              className="portfolio__project-image"
              src={sergeinikiforov}
              alt="https://nikiforov.netlify.app/"
            />
          </ExternalLink>
          <div className="portfolio__project-header">
            <h3 className="portfolio__project-header-text">Sergei Nikiforov</h3>
            <div className="portfolio__project-header-links">
              <ExternalLink href="https://nikiforov.netlify.app/">
                <img
                  className="portfolio__project-header-icon"
                  src={globe}
                  alt="https://nikiforov.netlify.app/"
                />
              </ExternalLink>
              <ExternalLink href="https://github.com/lyly2112/nikiforov">
                <img
                  className="portfolio__project-header-icon"
                  src={git}
                  alt="https://github.com/lyly2112/nikiforov"
                />
              </ExternalLink>
            </div>
            <div className="portfolio__project-tools">
              <div className="portfolio__project-tool">React</div>
              <div className="portfolio__project-tool">JS</div>
              <div className="portfolio__project-tool">Sass</div>
              <div className="portfolio__project-tool">Emailjs</div>
            </div>
          </div>
        </GlowIn>
        <GlowIn className="portfolio__project">
          <ExternalLink href="https://majesticbay.netlify.app/">
            <img
              className="portfolio__project-image"
              src={majesticbay}
              alt="https://majesticbay.netlify.app/"
            />
          </ExternalLink>
          <div className="portfolio__project-header">
            <h3 className="portfolio__project-header-text">Majestic Bay</h3>
            <div className="portfolio__project-header-links">
              <ExternalLink href="https://majesticbay.netlify.app/">
                <img
                  className="portfolio__project-header-icon"
                  src={globe}
                  alt="https://majesticbay.netlify.app/"
                />
              </ExternalLink>
              <ExternalLink href="https://github.com/lyly2112/MajesticBay">
                <img
                  className="portfolio__project-header-icon"
                  src={git}
                  alt="https://github.com/lyly2112/MajesticBay"
                />
              </ExternalLink>
            </div>
            <div className="portfolio__project-tools">
              <div className="portfolio__project-tool">React</div>
              <div className="portfolio__project-tool">JS</div>
              <div className="portfolio__project-tool">Bootstrap</div>
              <div className="portfolio__project-tool">Emailjs</div>
            </div>
          </div>
        </GlowIn>
      </div>
    </div>
  );
}

export default Portfolio;
