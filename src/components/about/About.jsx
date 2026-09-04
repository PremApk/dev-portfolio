import React from "react";
import "./about.css";
import Image from "../../assets/avatar-about.jpg";
import resumePdf from "../../assets/Premkumar Arumugam.pdf";
import AboutBox from "./AboutBox";

const CV_FILE_NAME = "PREMKUMAR_ARUMUGAM_CV.pdf";

const downloadCV = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(resumePdf);
    if (!response.ok) {
      throw new Error("Could not fetch CV");
    }
    const blob = await response.blob();
    const file = new Blob([blob], { type: "application/pdf" });
    const url = window.URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch {
    const fallback = document.createElement("a");
    fallback.href = resumePdf;
    fallback.download = CV_FILE_NAME;
    fallback.rel = "noreferrer";
    document.body.appendChild(fallback);
    fallback.click();
    fallback.remove();
  }
};

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
            <a
              className="btn"
              href={resumePdf}
              download={CV_FILE_NAME}
              onClick={downloadCV}
            >
              Download CV
            </a>
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
