import { filterGenders, sortFilms, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
const newData = [...data];

const movieSearch = document.querySelector(".movie-search");
const gendersFilms = document.querySelector("#filter");
const orderFilms = document.querySelector("#order");
const movieCards = document.querySelector("#root");
const statsButton = document.querySelector(".statsButton");
const statsWindow = document.querySelector(".statsWindow");
const statsMovie = document.querySelector(".statsMovie")
const closeStats = document.querySelector(".closeStats");
const statsFondo = document.querySelector(".statsFondo");
const cleanerButton = document.querySelector(".cleanerButton");

movieCards.appendChild(renderItems(newData));

movieSearch.addEventListener("input", function () {
  const results = [];
  const textSearch = movieSearch.value.toLowerCase();
  const search = newData.filter((elemento) => {
    return elemento.name.toLowerCase().includes(textSearch);
  });
  
  if (search) {
    movieCards.innerHTML = "";
    results.push(...search);
    movieCards.appendChild(renderItems(results));
  }
});

gendersFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  sortFilms;
  const selectedGender = gendersFilms.value;
  const filterMovie = filterGenders(newData, "genders", selectedGender);
  movieCards.appendChild(renderItems(filterMovie));
});

gendersFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  const selectedGender = gendersFilms.value;
  const filterMovie = filterGenders(newData, "genders", selectedGender);
  sortFilms;
  movieCards.appendChild(renderItems(filterMovie));

});

orderFilms.addEventListener("change", function () {
  movieCards.innerHTML = "";
  gendersFilms.value = "genres";
  const selectOrder = orderFilms.value;
  let filmAsc;

  if (selectOrder === "asc") {
    filmAsc = sortFilms(newData, "name", "asc");
  } else {
    filmAsc = sortFilms(newData, "name", "desc");
  }
  movieCards.appendChild(renderItems(filmAsc));
});

cleanerButton.addEventListener("click", function () { 
  const newData = [...data]; 
  movieSearch.value = ""; 
  movieCards.innerHTML = ""; 
  gendersFilms.value = "genres"; 
  orderFilms.value = "todos"; 
  movieCards.appendChild(renderItems(newData)); 
});

statsButton.addEventListener("click", function () {
  statsMovie.textContent = computeStats(newData);
  statsWindow.classList.remove("noVisual");
  statsFondo.classList.remove("noVisual");
});

closeStats.addEventListener("click", function () {
  statsWindow.classList.add("noVisual");
  statsFondo.classList.add("noVisual");
  return closeStats;
});
