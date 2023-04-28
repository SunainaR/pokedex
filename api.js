




// const fetchPokemon = require('./api.js')
//fetchPokemon('charizard').then((pokemon) => console.log(pokemon))

const fetchPokemon = (pokemon_name) => {
   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => response.json())
  .then((data) => pokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight, 
    types: data.types.map(type => type.name)
  });
};

module.exports = fetchPokemon;