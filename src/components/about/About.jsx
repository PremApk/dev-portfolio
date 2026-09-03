import React from "react";
import "./about.css";
import Image from "../../assets/avatar-about.jpg";
import AboutBox from "./AboutBox";

const FILE_URL = "/PREMKUMAR_ARUMUGAM_CV.pdf";

const skills = [
  "Java",
  "Python",
  "Spring Boot",
  "Hibernate",
  "LangChain",
  "Kafka",
  "IBM MQ",
  "MySQL",
  "Oracle",
  "PostgreSQL",
  "Azure",
  "AWS",
  "OpenShift",
  "Docker",
  "Kubernetes",
  "Streamlit",
  "Gradio",
  "Git",
  "Maven",
  "Gradle",
  "Transact T24",
];

const downloadFileAtURL = (url) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "PREMKUMAR_ARUMUGAM_CV.pdf");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="About Premkumar" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <div className="about__description">
              I am a Microservices Architect and AI Engineer with experience
              across Temenos banking platforms and Citi QFXLM Money Markets.
              I design scalable Java services, modernize legacy systems, and
              use AI-assisted engineering to cut operational toil. My work
              spans REST APIs, distributed systems, Kafka streaming, and
              cloud deployments on Azure, AWS, and OpenShift.
            </div>
            <button
              className="btn"
              onClick={() => {
                downloadFileAtURL(FILE_URL);
              }}
            >
              Download CV
            </button>
          </div>
          <div className="about__skills">
            {skills.map((skill) => (
              <span className="skill__chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
