const maxRecord = 151;
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonList = document.getElementById('pokemonList')

function loadPokemonItens(offset, limit){
pokeApi.getPokemons(offset , limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `<li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
           ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}

        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">

    </div>
  
</li>
  ` ).join('')
  pokemonList.innerHTML +=  newHtml

})
}

loadPokemonItens(offset , limit)

loadMoreButton.addEventListener('click' , () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecord){
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
    loadPokemonItens(offset, limit)
    }
})
