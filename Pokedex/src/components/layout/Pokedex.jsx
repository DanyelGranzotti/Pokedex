import React from "react";

import PokemonCard from "./PokemonCard";

import { CircularProgress } from "@mui/material";
import * as S from "../styles/layout/Pokedex.styled";

const Pokedex = (props) => {
  const { pokemonList, loading } = props;
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <S.PokedexHolder>
          {pokemonList &&
            pokemonList.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </S.PokedexHolder>
      )}
    </>
  );
};

export default Pokedex;
