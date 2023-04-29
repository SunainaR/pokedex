const Pokedex = require('./pokedex')

describe("Pokedex Class", () => {
  beforeEach(() => {
    my_pokedex = new Pokedex();
  });

  it("returns an empty Pokedex", () => {
    expect(my_pokedex.all()).toEqual([]);
  });

  it("adds pikachu to the pokedex", () => {
    my_pokedex.catch('pikachu')
    expect(my_pokedex.all()).toEqual(['pikachu'])
  });

  it("adds pikachu and jigglypuff to the pokedex", () => {
    my_pokedex.catch('pikachu')
    my_pokedex.catch('jigglypuff')
    expect(my_pokedex.all()).toEqual(['pikachu', 'jigglypuff'])
  });

})