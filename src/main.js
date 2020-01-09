import { orderMovie } from './data.js';
const Movie = orderMovie() // Importar la función qe está en data.js



/*---------------------------------------------------------------------------------*/

/* API Omdb */

/*---------------------------------------------------------------------------------*/

/* Ocultar carrusel al ingresar a página */

/* Ocultar carrusel  al hacer click en buscar*/
const carouselStart = document.getElementById("carouselStart");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener('click', hideCarousel);

function hideCarousel(){
  carouselStart.style.display = "none";
}

fetch ('http://www.omdbapi.com/?s=series&apikey=c8814936')
.then (res => res.json())
.catch(error => console.log(error))
.then (data => console.log(data))



/*---------------------------------------------------------------------------------*/

/* Buscar título */


function renderMovie(image, title, year, production) {
   const movieTpl = document.getElementById("movieCardTpl");

   let movieEl = document.createElement("div");

   movieEl.innerHTML = movieTpl.innerHTML;

   movieEl.querySelector(".card-img-top").src = image;
   movieEl.querySelector(".card-title").innerHTML = title + " " +production;
   movieEl.querySelector(".card-text").innerHTML = "Year: " + year;
   document.querySelector(".card-columns").appendChild(movieEl);
 }

 const searchTitle = document.getElementById("searchInput").value;

// /* Realizar llamado API */
//


    //const fetchUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=90f8aca6';
    //const searchParam = "s=amor&type=series";

  //   fetch(`${fetchUrl}&${searchParam}`)
  //   .then(function(response) {
  //    return response.json();
  //    })
  //  .then(function(json) {
  //    console.log(json.Response)
  //    const results = json.Search;

  //    for (let i = 0; i < results.length; i++) {
  //      const movie = results[i];

  //      renderMovie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
  //    }
  //  });



/*---------------------------------------------------------------------------------*/
