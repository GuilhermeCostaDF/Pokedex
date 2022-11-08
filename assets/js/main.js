const pokemonList = document.getElementById("pokemonList");

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes
    .map((typeSlot) => {
      return `
    <li class="type">${typeSlot.type.name}</li>
    `;
    })
    .join("");
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${
        pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
      }</span>
      <div class="detail">
        <ol class="types">
          ${convertPokemonTypesToLi(pokemon.types)}
        </ol>
        <img
          src="${pokemon.sprites.other.dream_world.front_default}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `;
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
