import React from "react";

import { formatIdNumber } from "../utils/FormatData";

import * as S from "../styles/layout/PokemonCard.styled";

const capitalizeFirstLetter = ([first, ...rest], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join("");

const PokemonCard = (props) => {
  const { pokemon } = props;

  return (
    <S.PokemonCardHolder
      to={"/" + pokemon.id}
      type={pokemon.types[0].type.name}
    >
      <S.IdHolder> #{formatIdNumber(pokemon.id)}</S.IdHolder>
      <S.Content>
        <S.Info>
          <S.Name>{capitalizeFirstLetter(pokemon.name)}</S.Name>
          <S.Types>
            {pokemon.types.map((type, index) => (
              <S.Type key={index}>
                {capitalizeFirstLetter(type.type.name)}
              </S.Type>
            ))}
          </S.Types>
        </S.Info>
        <S.Sprite src={pokemon.sprites.front_default} alt={pokemon.name} />
      </S.Content>
    </S.PokemonCardHolder>
  );
};

export default PokemonCard;
