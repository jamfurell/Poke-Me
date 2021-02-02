//orig pokeApi site = "https://pokeapi.co/api/v2/pokemon"


console.log("Bloody Mary")

//create variable named button that selects button element stored in id# findButton
const button= document.getElementById('findButton');
let abilities_class= document.querySelector(".abilities");



// abilityClass.appendChild(abilityList);

//create function called findPokemon that fetches specific Pokemon Api by including user input and parsing with json()
    //create variable named userInput that selects input with id#nameSearch
    //create variable named pokemonName to store user input(pokemon name user submitted)
    //create variable containing API url with pokemon name added to end to search api for that specific pokemon
    //fetch the api and parse using json()
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
        let name= pokemonData.name;
        document.getElementById('nameId').innerText = name;
      
        let type= pokemonData.types[0].type.name;
        document.getElementById('typeId').innerText= `Type: ` + type;

        let height= pokemonData.height/10;
        document.getElementById('heightId').innerText= `Height: ` + height + ` m`;

        let weight= pokemonData.weight/10;
        document.getElementById('weightId').innerText= `Weight: ` + weight + ` kg`;


        while(abilities_class.firstChild){
           abilities_class.removeChild(abilities_class.firstChild)
       }
        // console.log(pokemonData.abilities.length);
        let pokemonAbility=pokemonData.abilities;

        for(i=0; i<pokemonAbility.length; i++){
            let abilityLi= document.createElement('li'); 
            abilityLi.innerText = pokemonAbility[i].ability.name 
            abilities_class.appendChild(abilityLi);
            // console.log(abilityLi)
        }

    
console.log(pokemonData.height)
       console.log(`pokemon height is: `+ pokemonData.height)
    //    console.log(`pokemon name is: ` + pokemonData.name)
       console.log(`pokemon weight is: ` + pokemonData.weight)
       console.log(`pokemon type is: ` + pokemonData.types[0].type.name)
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