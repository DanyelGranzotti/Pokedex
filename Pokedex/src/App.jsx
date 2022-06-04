import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";

import SearchBar from "./components/layout/SearchBar";
import Pokedex from "./components/layout/Pokedex";

import {
  getPokemonData,
  getPokemonList,
  serchPokemonByName,
} from "./api/pokeapi";

const App = () => {
  const theme = {
    colors: {
      primary: "#0d0d0d",
      secondary: "#f5f5f5",
      tertiary: "#f5f5f5",
      quaternary: "#f5f5f5",
      white: "#000000",
      black: "#f5f5f5",
    },
    fonts: {
      primary: "Share Tech Mono",
      secondary: "Share Tech Mono",
      weight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
        black: "900",
      },
    },
    mobile: 768,
    mobileInPx: "768px",
    transition: "all 0.3s ease-in-out",
  };

  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = window.innerWidth <= theme.mobile ? 6 : 12;

  const catchPokemonList = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemonList(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const finalData = await Promise.all(promises);

      setPokemonList(finalData);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
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
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    catchPokemonList();
  }, [page]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchBar onSearch={onShearchHandler} />
        {!notFound ? (
          <Pokedex
            pokemonList={pokemonList}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        ) : (
          <div>
            <h1>Pokemon não encontrado</h1>
          </div>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
