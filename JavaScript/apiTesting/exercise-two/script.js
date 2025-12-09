const image = document.getElementById("image");
const name = document.getElementById("name");
const element = document.getElementById("element");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const fetchPokemons = async () => {
 try {
  // HINT: Add ?limit=10 to get the first 10 Pokémon
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

  // TODO: Fetch the data using fetch()
  const response = await fetch(URL);
  if (!response.ok) {
   throw new Error("Network issue");
  }
  // TODO: Convert the response to JSON
  const data = await response.json();
  // HINT: Log the results to explore them
  console.log(data);

  // TODO: Log only the array of Pokémon objects (data.results)
  console.log(data.results);

  // TODO: Log the name of the first Pokémon
  console.log(data.results[0].name);

  // TODO: Log the names of ALL Pokémon in the array
  for (i = 0; i < 10; i++) {
   console.log(data.results[i]);
  }
 } catch (error) {
  console.log("Error fetching Pokémon:", error);
 }
};

//fetchPokemons();



const fetchChosenPokemonData = async () => {
 const pokemonURL = "https://pokeapi.co/api/v2/pokemon/10/";
 try {
  // TODO: Fetch your chosen Pokémon data
  const response = await fetch(pokemonURL);
  if (!response.ok) {
   throw new Error("Network issue");
  }
  // TODO: Convert the response to JSON
  const data = await response.json();
  // TODO: Log the full data to explore the structure
  console.log(data);

  // HINT: Check what properties exist for sprites, types, weight, height, etc.

 } catch (error) {
  console.log("Error fetching chosen Pokémon:", error);
 }
};

// Uncomment to test
fetchChosenPokemonData();


// ------------------------------
// 3) Update the DOM
// ------------------------------

// After exploring the data above, update the HTML table
// HINTS:
// - For the image: set `image.src`
// - For text fields: use `textContent` or `innerHTML`
// - If a property is an array (like types), you can use `.map()` and `.join()`


// ------------------------------
// 4) BONUS: Make it reusable
// ------------------------------

// HINT: You can create a function that takes a Pokémon ID or name
// and fetches its data to update the table dynamically
// Example: fetchPokemonDataReusable("pikachu");

// TODO: Create a function fetchPokemonDataReusable(pokemonIdOrName) {...}

// TODO: Create a button click handler that asks the user for input
// and calls your reusable function

//Roulett hjul:
//https://codepen.io/barney-parker/pen/OPyYqy
//https://codepen.io/onetuskedmarios/pen/OJxJKEP

//Mouse animations
//https://codepen.io/leimapapa/pen/XWGMrvo