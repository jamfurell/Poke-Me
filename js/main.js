//orig pokeApi site = "https://pokeapi.co/api/v2/pokemon"




//create variable named button that selects button element stored in id# findButton
const button= document.getElementById('findButton');
let abilityClass= document.querySelector(".ability");



// abilityClass.appendChild(abilityList);

//create function called findPokemon that fetches specific Pokemon Api by including user input and parsing with json()
    //create variable named userInput that selects input with id#nameSearch
    //create variable named pokemonName to store user input(pokemon name user submitted)
    //create variable containing API url with pokemon name added to end to search api for that specific pokemon
    //fetch the api and parse using json()
function findPokemon(){
console.log("findpokemon function is working")

let userInput = document.getElementById('nameSearch')
let pokemonName = userInput.value 
let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

fetch(pokeApi)
    .then(function(dataRequest){
        return dataRequest.json();
    })
    .then(function(pokemonData){
       while(abilityClass.firstChild){
           abilityClass.removeChild(abilityClass.firstChild)
       }
        console.log(pokemonData.abilities.length);
        let pokemonAbility=pokemonData.abilities;
        for(i=0; i<pokemonAbility.length; i++){
            let abilityLi= document.createElement('li'); 
            abilityLi.innerText = pokemonAbility[i].ability.name 
            abilityClass.appendChild(abilityLi);
            console.log(abilityLi)
        }
    })
}










button.addEventListener('click', findPokemon)



// for (i=0;i<pokemonData.length; i++){
//     pokemonAbility.push(pokemonData.abilities[i].ability.name);
// }

// fetch(pokeApi);
//     .then(function(dataRequest) => {
//         return dataRequest.json();
//     })
//     .then(function(parsedData){
//         console.log(parsedData)
//     })