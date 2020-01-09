import {
  orderMovie
} from './data.js'; // Importar la función qe está en data.js



/*---------------------------------------------------------------------------------*/

/* API Omdb */
const fetchUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=90f8aca6`;
// const searchParam = "";

// fetch(`${fetchUrl}&${searchParam}`)
fetch(fetchUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json.Response);
    const results = json.Search;

    console.log(json);
    console.log(createCard(json));
    // for (let i = 0; i < results.length; i++) {
    //   const movie = results[i];
    //
    //   renderMovie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
    // }
  });



/*---------------------------------------------------------------------------------*/

/* Crear card */
function createCard(data) {

  /* Creación de elementos */
  let containerPicture = document.createElement("div");
  let cardPoster = document.createElement("div");
  let imgMovie = document.createElement("img");
  let cardYear = document.createElement("h3");
  let cardTitle = document.createElement("h2");
  let cardDirector = document.createElement("h5");
  let cardActor = document.createElement("h5");
  let cardPlot = document.createElement("p");

  /* Asignación de clases*/
  /* Asignación de atributos */
  /* Valores */
  /* Info elementos y árbol padre-hijo*/


  containerPicture.classList.add("containerPicture");

  /* div Poster */
  cardPoster.classList.add("poster");
  containerPicture.appendChild(cardPoster);

  /* Datos poster */
  imgMovie.setAttribute("src", data.Poster);
  imgMovie.setAttribute("alt", "imagen de " + data.Title);
  cardPoster.appendChild(imgMovie);

  cardYear.innerHTML = data.Year;
  cardPoster.appendChild(cardYear);

  cardTitle.innerHTML = data.Title;
  cardPoster.appendChild(cardTitle);

  cardDirector.innerHTML = data.Director;
  cardPoster.appendChild(cardDirector);

  cardActor.innerHTML = data.Actors;
  cardPoster.appendChild(cardActor);

  cardPlot.innerHTML = data.Plot;
  cardPoster.appendChild(cardPlot);

  return containerPicture;

}

/*---------------------------------------------------------------------------------*/

/* Al hacer click en películas ocultar carrusel e información*/
const carouselStart = document.getElementById("carouselStart");
const information = document.getElementById("information");
const movieNav = document.getElementById("movieNav");

movieNav.addEventListener('click', hideStart);

function hideStart() {
  carouselStart.style.display = "none";
  information.style.display = "none";
}




/*---------------------------------------------------------------------------------*/




/*---------------------------------------------------------------------------------*/

/* Buscar título */




/*---------------------------------------------------------------------------------*/
