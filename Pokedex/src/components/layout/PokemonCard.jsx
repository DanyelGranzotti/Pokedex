import React from "react";
import { formatIdNumber } from "../utils/FormatData";

const PokemonCard = (props) => {
  const { pokemon } = props;

  return (
    <>
      <div>
        <img src={pokemon.sprites.back_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
        <h2>#{formatIdNumber(pokemon.id)}</h2>
        <h3>
          {pokemon.types.map((type, index) => (
            <div key={index}> {type.type.name} </div>
          ))}
        </h3>
      </div>
    </>
  );
};

export default PokemonCard;
