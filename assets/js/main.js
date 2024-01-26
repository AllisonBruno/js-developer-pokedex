const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const card = document.querySelector(".card");
const pokemon = document.querySelector(".pokemon");

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
function abrirCard(){
    pokemonList.addEventListener('click', () => {
        const poke = `
        
        <div id="icons">
            <i class="fa-solid fa-arrow-left" id="arrow"></i>
            <i class="fa-regular fa-heart"></i>
        </div>

        <li class="poke" >
        <div id="numero">
            <span class="nome">Bubassaur</span> 
            <span>#001</span> 
        </div>
            <span class="tipo">Green</span>
            <span class="tipo" >Poison</span>
           
        </li>
    <li>
        <div class="detalhes">
            <ol >
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">
            </ol>
        </div> 
        <div id="card-branco">
            <table id="container-table" >
                <tr>
                    <th>Specie</th>
                    <td>Seed</td>
                </tr>
                <tr>
                    <th>Height</th>
                    <td>2'.6*(0.70 cm)</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>15.2lbs(6.9 kg)</td>
                </tr>
                <tr>
                    <th>Abilities</th>
                    <td>Overgrow,Chiorophyl</td>
                </tr>
            </table>
        </div>
       
        `
        
        card.innerHTML += poke
        pokemonList.style.display = 'none';
        pokemonList.style.flexDirection = 'row';
        loadMoreButton.style.display = 'none';
        card.style.display = 'flex';
        retorno();
       
    })
    
    

   
    
}

abrirCard();

function retorno() {
    card.addEventListener('click', () => {
        
        pokemonList.style.display = 'flex';
        
        loadMoreButton.style.display = 'flex';
        card.style.display = 'none';
        limoarRetorno()
        
        
        
    })
}
function limoarRetorno() {
    card.innerHTML = "";
}