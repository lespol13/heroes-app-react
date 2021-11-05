import React, { useState, useMemo } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";

import HeroCard from "../heroes/HeroCard";
import getHeroesByName from "../../selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [heroSelected, setHeroSelected] = useState(q);

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleOnChange = ({ target }) => {
    setHeroSelected(target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${heroSelected}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="hero"
              placeholder="Find your hero"
              className="form-control"
              value={heroSelected}
              onChange={handleOnChange}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search ...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
