import React from "react";

const AboutBox = () => {
  return (
    <>
      <div className="about__boxes grid">
        <div className="about__box">
          <i className="about__icon icon-fire"></i>
          <div>
            <h3 className="about__title">10</h3>
            <span className="about__subtitle">Projects Completed</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-cup"></i>
          <div>
            <h3 className="about__title">1460</h3>
            <span className="about__subtitle">Cup of Coffee</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-people"></i>
          <div>
            <h3 className="about__title">543</h3>
            <span className="about__subtitle">Game Downloads</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-badge"></i>
          <div>
            <h3 className="about__title">470</h3>
            <span className="about__subtitle">GitHub Contribution</span>
          </div>
        </div>
      </div>

      <div className="about__boxes about__certs grid">
        <div className="about__box">
          <i className="about__icon icon-badge"></i>
          <div>
            <h3 className="about__title about__cert-title">PSPO I</h3>
            <span className="about__subtitle">Scrum.org Certified</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-globe"></i>
          <div>
            <h3 className="about__title about__cert-title">Goethe A1</h3>
            <span className="about__subtitle">German Certified</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-cloud-upload"></i>
          <div>
            <h3 className="about__title about__cert-title">AZ-900</h3>
            <span className="about__subtitle">Azure Fundamentals</span>
          </div>
        </div>
        <div className="about__box">
          <i className="about__icon icon-energy"></i>
          <div>
            <h3 className="about__title about__cert-title">Databricks</h3>
            <span className="about__subtitle">GenAI Fundamentals</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBox;
