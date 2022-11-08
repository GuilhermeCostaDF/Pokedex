const pokemonList = document.getElementById("pokemonList");

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${
        pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
      }</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type">${type}</li>`)
            .join("")}
        </ol>
        <img
          src="${pokemon.photo}"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `;
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
