import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <div className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div>
          <h3 className="resume__column-title">Education</h3>
          <div className="timeline grid">
            {Data.filter((val) => val.category === "education").map((val) => (
              <Card
                key={val.id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                company={val.company}
                desc={val.desc}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="resume__column-title">Work</h3>
          <div className="timeline grid">
            {Data.filter((val) => val.category === "experience").map((val) => (
              <Card
                key={val.id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                company={val.company}
                desc={val.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
