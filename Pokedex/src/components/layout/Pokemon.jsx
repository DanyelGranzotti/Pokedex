import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { serchPokemonById } from "../../api/pokeapi";
import { formatIdNumber } from "../utils/FormatData";
import { getPokemonDescription } from "../../api/pokeapi";

import NavBar from "./NavBar";
import * as S from "../styles/layout/Pokemon.styled";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";

const Pokemon = () => {
  const location = useLocation();
  const id = location.pathname;
  const [pokemon, setPokemon] = useState("");
  const [description, setDescription] = useState("");

  const catchPokemon = async (id) => {
    try {
      const response = await serchPokemonById(id);
      setPokemon(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const capitalizeFirstLetter = (
    [first, ...rest],
    locale = navigator.language
  ) => first.toLocaleUpperCase(locale) + rest.join("");

  catchPokemon(id);

  const getDescription = async (name) => {
    try {
      const response = await getPokemonDescription(name);
      const description = response.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      setDescription(description.flavor_text);
    } catch (error) {
      console.log(error);
    }
  };

  if (pokemon) {
    getDescription(pokemon.name);
  }

  return (
    <S.Body>
      {pokemon ? (
        <S.MainContainer type={pokemon.types[0].type.name}>
          <>
            <NavBar />
            <S.Info>
              <S.Top>
                <S.Name>{capitalizeFirstLetter(pokemon.name)}</S.Name>
                <S.IdHolder>#{formatIdNumber(pokemon.id)}</S.IdHolder>
              </S.Top>
              <S.Types>
                {pokemon.types.map((type, index) => (
                  <S.Type key={index}>
                    {" "}
                    {capitalizeFirstLetter(type.type.name)}{" "}
                  </S.Type>
                ))}
              </S.Types>
            </S.Info>
            <S.Description>
              <S.Sprite
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <S.Content>
                <S.DescriptionText>{description}</S.DescriptionText>
                <S.Mains>
                  <S.Main>
                    <S.StatsMainContainer>
                      <ScaleIcon /> {pokemon.weight} Kg
                    </S.StatsMainContainer>
                  </S.Main>
                  <S.Main>
                    <S.StatsMainContainer>
                      <StraightenIcon />
                      {pokemon.height} m
                    </S.StatsMainContainer>
                  </S.Main>
                  <S.MainMove>
                    {capitalizeFirstLetter(pokemon.abilities[0].ability.name)}
                  </S.MainMove>
                </S.Mains>

                <S.Stats>
                  <tr>
                    <S.StatsDescription>Ataque</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[1].base_stat}</S.StatsValor>
                    {/* <td>Grafico </td> */}
                  </tr>
                  <tr>
                    <S.StatsDescription>Defesa</S.StatsDescription>
                    <S.StatsValor> {pokemon.stats[2].base_stat}</S.StatsValor>
                    {/* <td>Grafico </td> */}
                  </tr>
                  <tr>
                    <S.StatsDescription> VI.Ataque</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[3].base_stat}</S.StatsValor>
                    {/* <td>Grafico </td> */}
                  </tr>
                  <tr>
                    <S.StatsDescription>VI.Defesa</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[4].base_stat}</S.StatsValor>
                    {/* <td>Grafico </td> */}
                  </tr>
                  <tr>
                    <S.StatsDescription>Velocidade</S.StatsDescription>
                    <S.StatsValor> {pokemon.stats[5].base_stat}</S.StatsValor>
                    {/* <td>Grafico </td> */}
                  </tr>
                </S.Stats>
              </S.Content>
            </S.Description>
          </>
        </S.MainContainer>
      ) : (
        <h1>Carregando...</h1>
      )}
    </S.Body>
  );
};

export default Pokemon;
