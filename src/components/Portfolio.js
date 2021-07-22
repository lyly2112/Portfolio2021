import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__header">Work & Play</div>
      <div className="portfolio__description">
        Most of the projects displayed here were created for personal
        curiousity, skill development or just because I can. Since my first
        "Hello world" line of code I got quite interested in this field, but
        later on I became more and more charmed with all the possibilities and
        creativity involved.
      </div>
      <div className="portfolio__projects">
        <div className="portfolio__projects__project">
          <div className="portfolio__projects__project__img"></div>
          <div className="portfolio__projects__project__header">Diana Webb</div>
          <div className="portfolio__projects__project">specs</div>
        </div>
        <div className="portfolio__projects__project">
          <div className="portfolio__projects__project__img"></div>
          <div className="portfolio__projects__project__header">
            Sergei Nikiforov
          </div>
          <div className="portfolio__projects__project">specs</div>
        </div>
        <div className="portfolio__projects__project">
          <div className="portfolio__projects__project__img"></div>
          <div className="portfolio__projects__project__header">
            Liliya Sherstobitova
          </div>
          <div className="portfolio__projects__project">specs</div>
        </div>
        <div className="portfolio__projects__project">
          <div className="portfolio__projects__project__img"></div>
          <div className="portfolio__projects__project__header">
            Majestic Bay
          </div>
          <div className="portfolio__projects__project">specs</div>
        </div>
        <div className="portfolio__projects__project">
          <div className="portfolio__projects__project__img"></div>
          <div className="portfolio__projects__project__header">
            Personal website (old version)
          </div>
          <div className="portfolio__projects__project">specs</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
