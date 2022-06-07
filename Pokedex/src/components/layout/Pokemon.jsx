import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { serchPokemonById } from "../../api/pokeapi";
import { formatIdNumber } from "../utils/FormatData";
import { getPokemonBySpecies } from "../../api/pokeapi";

import NavBar from "./NavBar";
import * as S from "../styles/layout/Pokemon.styled";
import ScaleIcon from "@mui/icons-material/Scale";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

import CustomLinearProgress from "./common/CustomLinearProgress";

const normalise = (value) => (value * 100) / 150;
const noramalisetotal = (value) => (value * 100) / 400;

const Pokemon = () => {
  const location = useLocation();
  const id = location.pathname;
  const [pokemon, setPokemon] = useState("");
  const [description, setDescription] = useState("");
  const [genderRate, setGenderRate] = useState(0);

  const catchPokemon = async (id) => {
    try {
      const response = await serchPokemonById(id);
      setPokemon(response);
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
      const response = await getPokemonBySpecies(name);
      const description = response.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      setDescription(description.flavor_text);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderRate = async (name) => {
    try {
      const response = await getPokemonBySpecies(name);
      const rate = response.gender_rate;
      setGenderRate(rate);
    } catch (error) {
      console.log(error);
    }
  };

  const totalStats = (stats) => {
    let total = 0;
    for (let index = 0; index < stats.length; index++) {
      const element = stats[index];
      total += element.base_stat;
    }
    return total;
  };

  if (pokemon) {
    getDescription(pokemon.name);
    getGenderRate(pokemon.name);
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
                      <ScaleIcon />
                      <S.MainTextContainer>
                        {pokemon.weight / 10} Kg
                      </S.MainTextContainer>
                    </S.StatsMainContainer>
                    <S.SubtitleMain>Peso</S.SubtitleMain>
                  </S.Main>
                  <S.Main>
                    <S.StatsMainContainer>
                      <S.CustomStraightenIcon />
                      <S.MainTextContainer>
                        {pokemon.height / 10} m
                      </S.MainTextContainer>
                    </S.StatsMainContainer>
                    <S.SubtitleMain>Altura</S.SubtitleMain>
                  </S.Main>
                  <S.MainMove>
                    <S.StatsMainMoveContainer>
                      {capitalizeFirstLetter(pokemon.abilities[0].ability.name)}
                    </S.StatsMainMoveContainer>
                    <S.SubtitleMain>Poder Principal</S.SubtitleMain>
                  </S.MainMove>
                </S.Mains>

                <S.Gender>
                  <S.GenderTitle>Gênero</S.GenderTitle>
                  <S.GenderRate>
                    <MaleIcon sx={{ color: "#6C79DB" }} />
                    <S.GenderText>{(100 / 8) * (8 - genderRate)}%</S.GenderText>
                  </S.GenderRate>
                  <S.GenderRate>
                    <FemaleIcon sx={{ color: "#F0729F" }} />
                    <S.GenderText>{(100 / 8) * genderRate}%</S.GenderText>
                  </S.GenderRate>
                </S.Gender>

                <S.Stats>
                  <S.StatsHolder>
                    <S.StatsDescription>Saúde</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[0].base_stat}</S.StatsValor>

                    <S.Graph>
                      <CustomLinearProgress
                        statusType={0}
                        statusValue={normalise(pokemon.stats[0].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription>Ataque</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[1].base_stat}</S.StatsValor>

                    <S.Graph>
                      <CustomLinearProgress
                        statusType={1}
                        statusValue={normalise(pokemon.stats[1].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription>Defesa</S.StatsDescription>
                    <S.StatsValor> {pokemon.stats[2].base_stat}</S.StatsValor>
                    <S.Graph>
                      <CustomLinearProgress
                        statusType={2}
                        statusValue={normalise(pokemon.stats[2].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription> VI.Ataque</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[3].base_stat}</S.StatsValor>
                    <S.Graph>
                      <CustomLinearProgress
                        statusType={3}
                        statusValue={normalise(pokemon.stats[3].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription>VI.Defesa</S.StatsDescription>
                    <S.StatsValor>{pokemon.stats[4].base_stat}</S.StatsValor>
                    <S.Graph>
                      <CustomLinearProgress
                        statusType={4}
                        statusValue={normalise(pokemon.stats[4].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription>Velocidade</S.StatsDescription>
                    <S.StatsValor> {pokemon.stats[5].base_stat}</S.StatsValor>
                    <S.Graph>
                      <CustomLinearProgress
                        statusType={5}
                        statusValue={normalise(pokemon.stats[5].base_stat)}
                      />
                    </S.Graph>
                  </S.StatsHolder>
                  <S.StatsHolder>
                    <S.StatsDescription>Total</S.StatsDescription>
                    <S.StatsValor>{totalStats(pokemon.stats)}</S.StatsValor>
                    <S.Graph>
                      <CustomLinearProgress
                        statusType={10}
                        statusValue={normalise(
                          noramalisetotal(totalStats(pokemon.stats))
                        )}
                      />
                    </S.Graph>
                  </S.StatsHolder>
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
