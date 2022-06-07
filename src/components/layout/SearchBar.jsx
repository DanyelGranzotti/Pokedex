import React, { useState } from "react";

import * as S from "../styles/layout/SearchBar.styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [pokemonName, setPokemonName] = useState("");

  const onChangeHandler = (e) => {
    setPokemonName(e.target.value);
    if (e.target.value.lenght === 0 || e.target.value.trim === 0) {
      onSearch(undefined);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(pokemonName);
    }
  };

  const onClickHandler = () => {
    onSearch(pokemonName);
  };

  return (
    <S.SearchBarContainer>
      <S.Input
        type="text"
        placeholder="Pesquisar pokemon"
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
      />
      <S.Button onClick={onClickHandler}>
        <SearchIcon />
      </S.Button>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
