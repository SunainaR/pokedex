const fetchPokemon = require('./api');

describe ("fetchPokemon function", () => {
  it('returns a promise of the useful pokemon data for charizard', async () => {
    const pokemon = await fetchPokemon('charizard')
      expect(pokemon.id).toEqual(6);
    });
  });