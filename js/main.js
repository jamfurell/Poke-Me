//orig pokeApi site = "https://pokeapi.co/api/v2/pokemon"
console.log("Bloody Mary")

//create variable named button that selects button element stored in id# findButton
const button= document.getElementById('findButton');
let pokemonPicF= document.getElementById('pokemonFront');
let pokemonPicB= document.getElementById('pokemonBack')
let special_class= document.querySelector('.specialAbilities');
let base_class = document.querySelector('.baseMoves')

// Try select div (with class called .data) and using getelementbyid to replace inner text - but won't work?
// let dataClass= document.querySelector('.data');
// dataClass.getElementById('nameId').innerText = name;


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
        console.log(pokemonData)
        render(pokemonData);
        pokemonPicF.setAttribute('src', pokemonData.sprites.front_default);
        // Checking for url with correct pokemon picture console.log(pokemonData.sprites.front_default)
        pokemonPicB.setAttribute('src', pokemonData.sprites.back_default);

        while(base_class.firstChild){
            base_class.removeChild(base_class.firstChild)
        }
       
        for (i=0; i<pokemonData.stats.length; i++){
           let baseStat= pokemonData.stats[i].base_stat;
           let baseType= pokemonData.stats[i].stat.name;
        //    string cap= baseType.substring(0,1).toUpperCase() + baseType.string(1)
       baseTypeCap= baseType.substring(0,1).toUpperCase + baseType.substring(1);
        console.log(baseTypeCap); 


            let baseLi= document.createElement('li');
            baseLi.innerText = baseType + ": " + baseStat;
            base_class.appendChild(baseLi);
        }

        while(special_class.firstChild){
           special_class.removeChild(special_class.firstChild)
       }
        // console.log(pokemonData.abilities.length);
        let pokemonAbility=pokemonData.abilities;

        for(i=0; i<pokemonAbility.length; i++){
            let specialLi= document.createElement('li'); 
            specialLi.innerText = pokemonAbility[i].ability.name ;
            special_class.appendChild(specialLi);
            // console.log(abilityLi)
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

    // console.log(pokemonData.height)
    //    console.log(`pokemon height is: `+ pokemonData.height)
    //    console.log(`pokemon name is: ` + pokemonData.name)
    //    console.log(`pokemon weight is: ` + pokemonData.weight)
    //    console.log(`pokemon type is: ` + pokemonData.types[0].type.name)