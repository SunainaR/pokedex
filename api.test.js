const fetchPokemon = require('./api.js');

describe ("fetchPokemon function", () => {
  it('returns a promise of the useful pokemon data for charizard', (done) => {
    fetchPokemon('charizard')
    .then((pokemon) => {
      expect(pokemon.id).toEqual(6);
      done();
    });
  });
});