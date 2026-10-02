import React from "react";

const Card = ({ icon, year, title, company }) => {
  return (
    <div className="timeline__item">
      <i className={icon}></i>
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      {company && <span className="timeline__company">{company}</span>}
    </div>
  );
};

export default Card;
