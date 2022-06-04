import React, { useState } from "react";
import { serchPokemonByName } from "../../api/pokeapi";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [pokemonName, setPokemonName] = useState("");

  const onChangeHandler = (e) => {
    setPokemonName(e.target.value);
    if (e.target.value.lenght === 0 || e.target.value.trim === 0) {
      onSearch(undefined);
    }
  };

  const onClickHandler = () => {
    onSearch(pokemonName);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;
