const fetchPokemon = (pokemon_name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
};

module.exports = fetchPokemon;

// const fetchPokemon = require('./api.js')
// fetchPokemon('pikachu')