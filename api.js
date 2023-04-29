const fetchPokemon = async (pokemon_name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
  const data = await response.json();
  const pokemon 
    = {
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => { return type.type.name})
    }
    return pokemon;
};

/* // Written using Promises
const fetchPokemon = (pokemon_name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => response.json())
  .then((data) => { const pokemon 
    = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight, 
    types: data.types.map((type) => { return type.type.name})
    }
    return pokemon;
  });
};

*/


// const fetchPokemon = require('./api.js')
//fetchPokemon('charizard').then((pokemon) => console.log(pokemon))


module.exports = fetchPokemon;


/*
const fetchPokemon = (pokemon_name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
};
*/

