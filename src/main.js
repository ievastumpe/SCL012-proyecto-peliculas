import { orderMovie } from './data.js'; // Importar la función qe está en data.js



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

/*
fetch ('http://www.omdbapi.com/?s=movie&apikey=c8814936') /*type fue repmlpazado x ?s */
 /*.then (response => response.json())
 .catch(error => console.log(error))

 .then (data => console.log (data))*/


const dramaMovies= ['tt0111161','tt1375666','tt0076759','tt0068646','tt0468569','tt0050083','tt0108052','tt0167260','tt0110912','tt0060196'];

const crimeMovies=['tt1302006','tt8946378','tt7286456','tt0068646','tt0056193','tt0110912','tt0993846','tt3402236','tt0099685','tt0264464'];
const adventureMovies=['tt0167260', 'tt1375666', 'tt0120737', 'tt0167261', 'tt0080684', 'tt0816692', 'tt0245429', 'tt0076759', 'tt0047478', 'tt4154796']
const comediesMovies=['tt0252487','tt6751668','tt0118799', 'tt1675434','tt0088763','tt0032553','tt0027977','tt0021749','tt1187043','tt0057012',]
const actionMovies=[]

 


TOP 10 ACTION
1. The Dark Knight (2008), 9.0, tt0468569
2. The Mountain II (2016), 8.9, tt5813916
3. Inception (2010), 8.8, tt1375666
4. The Matrix (1999), 8.7, tt0133093
5. Seven Samurai (1954), 8.6, tt0047478
6. Avengers: Endgame (2019), 8.5, tt4154796
7. Avengers: Infinity War (2018), 8.5, tt4154756
8. Gladiator (2000), 8.5, tt0172495
9. Léon: The Professional (1994), 8.5, tt0110413
10. Terminator 2: Judgment Day (1991), 8.5, tt0103064

TOP 10 THRILLER
1. The Dark Knight (2008), 9.0, tt0468569
2. Inception (2010), 8.8, tt1375666
3. Joker (2019), 8.7, tt7286456
4. Parasite (2019), 8.6, IMDB id= tt6751668
5. Se7en (1995), 8.6, tt0114369
6. The Silence of the Lambs (1991), 8.6, tt0102926
7. The Prestige (2006), 8.5, tt0482571
8. The Departed (2006), 8.5, tt0407887
9. The Usual Suspects (1995), 8.5, tt0114814
10. Léon: The Professional (1994), 8.5, tt0110413



function displayAll(data) {
  .innerHTML=""
  bestFilm.forEach(element => {
      fetch(`http://www.omdbapi.com/?i=${element}&apikey=46ccb234`)
      .then(res => res.json())
      .then(data => {
          const movies = data
          movieCard(movies)






/*---------------------------------------------------------------------------------*/

/* Buscar título */

//
//
// function renderMovie(image, title, year, production) {
//   const movieTpl = document.getElementById("movieCardTpl");
//
//   let movieEl = document.createElement("div");
//
//   movieEl.innerHTML = movieTpl.innerHTML;
//
//   movieEl.querySelector(".card-img-top").src = image;
//   movieEl.querySelector(".card-title").innerHTML = title + " " +production;
//   movieEl.querySelector(".card-text").innerHTML = "Year: " + year;
//   document.querySelector(".card-columns").appendChild(movieEl);
// }
//
// const searchTitle = document.getElementById("searchInput").value;
//
// /* Realizar llamado API */
//
// const fetchUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=90f8aca6`;
// const searchParam = "s=amor&type=series";
//
// fetch(`${fetchUrl}&${searchParam}`)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(json) {
//     console.log(json.Response)
//     const results = json.Search;
//
//     for (let i = 0; i < results.length; i++) {
//       const movie = results[i];
//
//       renderMovie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
//     }
//   });



/*---------------------------------------------------------------------------------*/
