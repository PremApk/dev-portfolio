import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState("Everything");

  const filterItem = (categoryItem) => {
    setActive(categoryItem);
    setItems(Menu.filter((curElem) => curElem.category === categoryItem));
  };

  const showAll = () => {
    setActive("Everything");
    setItems(Menu);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span
          className={`work__item ${active === "Everything" ? "active-work" : ""}`}
          onClick={showAll}
        >
          Everything
        </span>
        <span
          className={`work__item ${active === "Fintech" ? "active-work" : ""}`}
          onClick={() => filterItem("Fintech")}
        >
          Fintech
        </span>
        <span
          className={`work__item ${active === "Streaming" ? "active-work" : ""}`}
          onClick={() => filterItem("Streaming")}
        >
          Streaming
        </span>
        <span
          className={`work__item ${active === "Product" ? "active-work" : ""}`}
          onClick={() => filterItem("Product")}
        >
          Product
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, description, link } = elem;
          const CardInner = (
            <>
              <div className="work__thumb">
                <img src={image} alt={title} className="work__img" />
              </div>
              <div className="work__details">
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <p className="work__excerpt">{description}</p>
              </div>
            </>
          );

          return link ? (
            <a
              className="work__card"
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {CardInner}
            </a>
          ) : (
            <div className="work__card" key={id}>
              {CardInner}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
