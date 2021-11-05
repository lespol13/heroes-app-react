import React from "react";
import { Link } from "react-router-dom";
import { heroesImgs } from "../../helpers/heroesImages";

const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;

  return (
    <div
      className="card ms-2"
      style={{ maxWidth: 500, minWidth: 500, marginRight: 50 }}
    >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={heroesImgs(`./${id}.jpg`).default}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <h5 className="card-title"> {superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p>
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`./hero/${id}`}>Más ...</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
