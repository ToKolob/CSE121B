// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  console.log(data);
  results = data;
  var templeteLiteral = `<img src="${results.sprites.front_default}"> <h1>${results.name} </h1> \n  <h1>Type: ${results.types[0].type.name}</h1>`
  document.querySelector("#output").innerHTML = templeteLiteral
}

function doStuffList(data){
  console.log(data);

  for (let i = 0; i < data.results.length; i++) {
    const pokemonName = data.results[i].name;
    const li = document.createElement("li");
    li.textContent = `Pokemon: ${pokemonName}`;
    document.querySelector("#outputList").appendChild(li);
  }
}

const section = document.createElement("section")
section.setAttribute("id", "output")
const ulList = document.createElement("ul")
ulList.setAttribute("id", "outputList")
document.querySelector("body").appendChild(section)
document.querySelector("body").appendChild(ulList)

getPokemon(url);
getPokemonList(urlList);
