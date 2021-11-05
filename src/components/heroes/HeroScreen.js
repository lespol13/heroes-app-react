import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router";
import { getHeroesById } from "../../selectors/getHeroesById";
import { heroesImages } from "../../helpers/heroesImages";

const HeroScreen = ({ history }) => {
  const { heroesId } = useParams();

  const hero = useMemo(() => getHeroesById(heroesId), [heroesId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroesImages(`./${id}.jpg`).default}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="lis-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="lis-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="lis-group-item">
            <b>First appearance: </b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
