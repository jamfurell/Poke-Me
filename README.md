# POKE-ME 
Do you ever wonder how tall a pokemon is in real life? Or are you planning on battling with someone and want to find out the movesets of your opponent's pokemon? If you are, **Poke-Me** is perfect for users like you! 

### Preview
![](image/Poke-Me_Preview.png)

### Project Overview 
**Poke-Me** is created for users to easily search and find basic information about a specific pokemon. It is modeled after the *Pokedex* that users can find inside the Pokemon game. A *Pokedex* is a directory containing multiple details about the pokemon; i.e. their height, weight, attack moves and etc. 
Using the PokemonAPI ([click here for the link to the PokemonAPI!](https://pokeapi.co/)), **Poke-Me** fetches data and uses DOM manipulation to display the relevant information about a pokemon's profile. The specific type of information shown upon search is described further in details below. 

### Basic Layout
**Poke-Me** will include a search and find function located at the header of the page. Upon entering a pokemon's name, the site will display the pokemon's name and picture on the left side of the page. A feature that was added to the pokemon's picture was to show the picture of the front-facing side of the pokemon when a user hovers over the picture. On the right side of the page, the searched pokemon's biological data, basic statistics and special abilities used by that pokemon is shown. 

Biological data will include: 
- Type of pokemon 
- Height of pokemon
- Weight of pokemon

Basic statistics will include:
- Hp of pokemon
- Attack of pokemon
- Defense of pokemon
- Special-attack of pokemon
- Special-defense of pokemon
- Speed of pokemon 

### Original Wireframe
![](image/GA-proj1-_Wireframe.jpg)

### Arising Problems
The first issue that came up was taking the user input (a specific pokemon's name) and using the PokeAPI to fetch information for that specific pokemon. The issue was resolved by using string interpolation to take the user input and adding that to the end of the API endpoint to fetch the relevant information.
Another hurdle that was difficult to overcome was placing pictures and attempting to style it. A issue arose when CSS styling was used to change a style of a picture upon an event. Instead of CSS, javascript was used to successfully apply changes to a picture with an event listener. 
A problem to work on is changing the styling to accomadate smaller screen sizes. 