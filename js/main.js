
console.log("Bloody Mary")


const button= document.getElementById('findButton');
let pokemonPicF= document.getElementById('pokemonFront');
let pokemonPicB= document.getElementById('pokemonBack')
let special_class= document.querySelector('.specialAbilities');
let base_class = document.querySelector('.baseMoves')


function findPokemon(){
console.log("findpokemon function is working")

let userInput = document.getElementById('nameSearch')
let userPokemonName = userInput.value 
let pokeApi = `https://pokeapi.co/api/v2/pokemon/${userPokemonName}`

fetch(pokeApi)
    .then(function(dataRequest){
        return dataRequest.json();
    })
    .then(function(pokemonData){
        render(pokemonData);
        pokemonPicF.setAttribute('src', pokemonData.sprites.front_default);
        pokemonPicB.setAttribute('src', pokemonData.sprites.back_default);

        while(base_class.firstChild){
            base_class.removeChild(base_class.firstChild)
        }
        for (i=0; i<pokemonData.stats.length; i++){
            let baseStat= pokemonData.stats[i].base_stat;
            let baseType= pokemonData.stats[i].stat.name;
            let baseLi= document.createElement('li');
            baseLi.innerText = baseType + ": " + baseStat;
            base_class.appendChild(baseLi);
        }
        while(special_class.firstChild){
           special_class.removeChild(special_class.firstChild)
       }
        let pokemonAbility=pokemonData.abilities;

        for(i=0; i<pokemonAbility.length; i++){
            let specialLi= document.createElement('li'); 
            specialLi.innerText = pokemonAbility[i].ability.name ;
            special_class.appendChild(specialLi);
        }
    })
}

function render(data){
        let name= data.name;
        document.getElementById('nameId').innerText = name;
      
        let type= data.types[0].type.name;
        document.getElementById('typeId').innerText= `Type: ` + type;

        let height= data.height/10;
        document.getElementById('heightId').innerText= `Height: ` + height + ` m`;

        let weight= data.weight/10;
        document.getElementById('weightId').innerText= `Weight: ` + weight + ` kg`;
}



button.addEventListener('click', findPokemon)


document.querySelector('.picture').addEventListener('mouseover', ()=>{
   
    document.getElementById('pokemonFront').classList.add('show');
    document.getElementById('pokemonFront').classList.remove('hide');
    document.getElementById('pokemonBack').classList.add('hide');
})
document.querySelector('.picture').addEventListener('mouseout', ()=>{

    document.getElementById('pokemonFront').classList.add('hide');
    document.getElementById('pokemonFront').classList.remove('show');
    document.getElementById('pokemonBack').classList.add('show');
    document.getElementById('pokemonBack').classList.remove('hide');
})

