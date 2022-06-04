import React from "react";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const Pokedex = (props) => {
  const { pokemonList, loading, page, setPage, totalPages } = props;
  const onNextClickHandler = () => {
    if (page < totalPages - 1 && page >= 0) {
      setPage(page + 1);
    }
  };
  const onPreviousClickHandler = () => {
    if (page > 0 && page <= totalPages) {
      setPage(page - 1);
    }
  };
  return (
    <>
      <Pagination
        page={page + 1}
        totalPages={totalPages}
        onNextClick={onNextClickHandler}
        onPreviousClick={onPreviousClickHandler}
      />
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Pokedex</h1>
          {pokemonList &&
            pokemonList.map((pokemon, index) => {
              return <PokemonCard key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </>
  );
};

export default Pokedex;
