import React from "react";
import "./home.css";
import Me from "../../assets/avatar-home.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <div>
      <section className="container">
        <Shapes />
      </section>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="Premkumar Arumugam" className="home__img" />
          <h1 className="home__name">Premkumar Arumugam</h1>
          <span className="home__education">
            Microservices Architect | AI Engineer
          </span>
          <p className="home__summary">
            Building resilient banking platforms, modernizing legacy systems, and
            applying AI tooling to ship faster.
          </p>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
