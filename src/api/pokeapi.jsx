// Metodo que recebe o nome do pokemon e retorna os dados do mesmo.
export const serchPokemonByName = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Metodo que recebe o id do pokemon e retorna os dados do mesmo.
export const serchPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Metodo que recebe a especie do pokemon e retorna os dados da mesmo.
export const getPokemonBySpecies = async (name) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}/`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Metodo que recebe o numero maximos de pokemons e retorna uma lista com os dados dos pokemons desde o id 0 até o id limite.
export const getPokemonList = async (limit, offset = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Metodo que recebe o numero maximos de pokemons e retorna uma lista com os dados dos pokemons desde o id 0 até o id limite.
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
