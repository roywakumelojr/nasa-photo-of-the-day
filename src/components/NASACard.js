import React from "react";

const NASACard = props => {
  return (
    <div className="NASACard-info" key={props.id}>
      <h2>{props.title}</h2>
      <img className="NASACard-image" alt="IC 1805: The Heart Nebula" src={props.image} />
      <p>Date: {props.date}</p>
      <p>copyright: {props.copyright}</p>
      <p>{props.explanation}</p>
    </div>
  );
};

export default NASACard;