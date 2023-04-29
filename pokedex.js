class Pokedex {
  constructor() {
    this.pokemons = []
  };

  all() {
    return this.pokemons
  };

  catch(pokemon) {
    this.pokemons.push(pokemon)
  };

};

module.exports = Pokedex;