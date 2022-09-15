import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Pokedex from "./Pokedex";
import Pagination from "./Pagination";

import {
  getPokemonData,
  getPokemonList,
  serchPokemonByName,
} from "../../api/pokeapi";

import * as S from "../styles/layout/PokedexHolder.styled";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const catchPokemonList = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      if (selectedCategory) {
        setTotalPages(1);
        setPage(1);
        const data = await getPokemonList(891, 0);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
        const finalData = await Promise.all(promises);
        let filteredData = finalData.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedCategory)
        );
        setPokemonList(filteredData);
      } else {
        const data = await getPokemonList(18, 0 + (page - 1) * 18);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });

        const finalData = await Promise.all(promises);
        setPokemonList(finalData);
        setTotalPages(50);
      }
      setLoading(false);
    } catch (error) {
      console.log("Erro buscando os pokemons", error);
    }
  };

  const onShearchHandler = async (pokemonName) => {
    if (!pokemonName) {
      return catchPokemonList();
    }

    setLoading(true);
    setNotFound(false);
    const data = await serchPokemonByName(pokemonName);
    if (!data) {
      setNotFound(true);
    } else {
      setPokemonList([data]);
    }
    setLoading(false);
  };

  const onFilterChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    catchPokemonList();
  }, [selectedCategory, page]);

  return (
    <S.MainContainer>
      <S.TitleContainer>
        Mais de 250 Pokemons para você escolher o seu favorito
      </S.TitleContainer>
      <SearchBar onSearch={onShearchHandler} />
      <Filter onFilterChange={onFilterChangeHandler} />
      {!notFound ? (
        <>
          <Pokedex pokemonList={pokemonList} loading={loading} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <S.TitleContainer>
          Pokemon não encontrado <br />
          =(
        </S.TitleContainer>
      )}
    </S.MainContainer>
  );
};

export default Home;
