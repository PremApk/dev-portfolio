import React from "react";
import "./services.css";
import Image1 from "../../assets/springio-icon.svg";
import Image2 from "../../assets/bash.svg";
import Image3 from "../../assets/kafka.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Banking Microservices",
    description:
      "I design and deliver production-grade Spring Boot microservices for banks — scalable APIs for core banking, funds authorisation, and customer master data that stand up to real transaction volumes.",
  },
  {
    id: 2,
    image: Image2,
    title: "Distributed Systems",
    description:
      "I build highly available, distributed applications that banks can run with confidence: resilient service communication, event-driven flows, and limited-service modes so customer journeys keep working during planned downtime.",
  },
  {
    id: 3,
    image: Image3,
    title: "Cloud-Native Platforms",
    description:
      "I take production workloads to Kubernetes, Azure, AWS, and OpenShift — containerised, observable, and ready to scale across regions for capital markets and core banking platforms.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">What I Do</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
