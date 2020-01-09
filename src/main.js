import {
  orderMovie
} from './data.js'; // Importar la función qe está en data.js



/*---------------------------------------------------------------------------------*/



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
const top = document.getElementById("top");

movieNav.addEventListener('click', hideStartMovie);

function hideStartMovie() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las peliculas */
  const sectionMovies = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0021749", "tt1187043", "tt0057012", "tt5813916", "tt0133093", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0468569", "tt1375666", "tt7286456","tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0167260", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0047478", "tt4154796", "tt0111161", "tt0076759", "tt0068646", "tt0050083", "tt0108052", "tt0110912", "tt0060196", "tt1302006", "tt8946378", "tt0068646", "tt0056193",  "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt0109830", "tt0034583", "tt0027977", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionMovies.length; i++) {

    const idMovie = sectionMovies[i];

    fetch(`https://www.omdbapi.com/?i=${idMovie}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Al hacer click en series ocultar carrusel e información*/
const seriesNav = document.getElementById("seriesNav");

seriesNav.addEventListener('click', hideStartSeries);

function hideStartSeries() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las series */
  const sectionSeries = ["tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312", "tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

  // const sectionSeriesId = orderMovie(sectionSeries, 'id', 'asc');
  // console.log(sectionSeriesId);

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionSeries.length; i++) {

    const idSerie = sectionSeries[i];

    fetch(`https://www.omdbapi.com/?i=${idSerie}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Drama */

/* Al hacer click en género ocultar carrusel e información*/
const dramaNav = document.getElementById("drama");

dramaNav.addEventListener('click', hideStartDrama);

function hideStartDrama() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las dramas */
  const sectionDrama = ["tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionDrama.length; i++) {

    const idDrama = sectionDrama[i];

    fetch(`https://www.omdbapi.com/?i=${idDrama}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}




/*---------------------------------------------------------------------------------*/

/* Género Comedia */

/* Al hacer click en género ocultar carrusel e información*/
const comedyNav = document.getElementById("comedy");

comedyNav.addEventListener('click', hideStartComedy);

function hideStartComedy() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las comedias */
  const sectionComedy = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionComedy.length; i++) {

    const idComedy = sectionComedy[i];

    fetch(`https://www.omdbapi.com/?i=${idComedy}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Acción */

/* Al hacer click en género ocultar carrusel e información*/
const actionNav = document.getElementById("action");

actionNav.addEventListener('click', hideStartAction);

function hideStartAction() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las de acción */
  const sectionAction = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionAction.length; i++) {

    const idAction = sectionAction[i];

    fetch(`https://www.omdbapi.com/?i=${idAction}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Crimen */

/* Al hacer click en género ocultar carrusel e información*/
const crimeNav = document.getElementById("crime");

crimeNav.addEventListener('click', hideStartCrime);

function hideStartCrime() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las de crimen */
  const sectionCrime = ["tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionCrime.length; i++) {

    const idCrime = sectionCrime[i];

    fetch(`https://www.omdbapi.com/?i=${idCrime}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Género Thriller */

/* Al hacer click en género ocultar carrusel e información*/
const thrillerNav = document.getElementById("thriller");

thrillerNav.addEventListener('click', hideStartThriller);

function hideStartThriller() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los trhiller */
  const sectionThriller = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionThriller.length; i++) {

    const idThriller = sectionThriller[i];

    fetch(`https://www.omdbapi.com/?i=${idThriller}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/

/* Género Romance */

/* Al hacer click en género ocultar carrusel e información*/
const romanceNav = document.getElementById("romance");

romanceNav.addEventListener('click', hideStartRomance);

function hideStartRomance() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los romances */
  const sectionRomance = ["tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionRomance.length; i++) {

    const idRomance = sectionRomance[i];

    fetch(`https://www.omdbapi.com/?i=${idRomance}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Género Aventura */

/* Al hacer click en género ocultar carrusel e información*/
const adventureNav = document.getElementById("adventure");

adventureNav.addEventListener('click', hideStartAdventure);

function hideStartAdventure() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los de aventura */
  const sectionAdventure = ["tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionAdventure.length; i++) {

    const idAdventure = sectionAdventure[i];

    fetch(`https://www.omdbapi.com/?i=${idAdventure}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}





const topComedyMovie = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012"];
const topActionMovie = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064"];
const topThrillerMovie = ["tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413"];
const topAdventureMovie = ["tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796"];
const topDramaMovie = ["tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196"];
const topCrimeMovie = ["tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464"];
const topRomanceMovie = ["tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604"];



/*---------------------------------------------------------------------------------*/

const comedySeries = ["tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];
const actionSeries = ["tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312"];
const thrillerSeries = ["tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999"];
const adventureSeries = ["tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171"];
const dramaSeries = ["tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520"];
const crimeSeries = ["tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546"];
const romanceSeries = ["tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

/*---------------------------------------------------------------------------------*/

/* Buscar título */

const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener('click', searchTitle);

function searchTitle() {


  let movieId = new Array();

  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=90f8aca6`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json.Response)
      const results = json.Search;
      console.log(results);

      for (let i = 0; i < results.length; i++) {
        movieId[i] = results[i].imdbID;
      }
      console.log(movieId);


      for (let i = 0; i < movieId.length; i++) {

        const idSearch = movieId[i];
        console.log(idSearch);

        fetch(`https://www.omdbapi.com/?i=${idSearch}&apikey=90f8aca6`)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);

            /* muestre en wrap tarjeta */
            let card = createCard(data);
            /* Añadir como hijos a div wrap */
            let cardWrap = document.getElementById('wrap');
            cardWrap.appendChild(card);

          });
      }

    })
}

/*---------------------------------------------------------------------------------*/

// const all = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413", "tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796", "tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312", "tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];
//
// /* Al hacer click en ordenar por, ocultar carrusel e información*/
// const OrderAzNav = document.getElementById("orderAz");
//
// OrderAzNav.addEventListener('click', hideStartOrderAz);
//
// function hideStartOrderAz() {
//   carouselStart.style.display = "none";
//   information.style.display = "none";
//   top.style.display = "block";
//
//   /* pedir que vacie wrap en html */
//   document.getElementById("wrap").innerHTML = "";
//
//   for (let i = 0; i < all.length; i++) {
//
//     const orderAz = all[i];
//
//     fetch(`https://www.omdbapi.com/?i=${orderAz}&apikey=90f8aca6`)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data);
//         orderMovie(data, 'title', 'A-Z');
//         /* muestre en wrap tarjeta */
//         let card = createCard(data);
//         /* Añadir como hijos a div wrap */
//         let cardWrap = document.getElementById('wrap');
//         cardWrap.appendChild(card);
//
//       });
//   }
// import {
  orderMovie

from ('./data.js'); // Importar la función qe está en data.js



/*---------------------------------------------------------------------------------*/



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
const top = document.getElementById("top");

movieNav.addEventListener('click', hideStartMovie);

function hideStartMovie() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las peliculas */
  const sectionMovies = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413", "tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796", "tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionMovies.length; i++) {

    const idMovie = sectionMovies[i];

    fetch(`https://www.omdbapi.com/?i=${idMovie}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Al hacer click en series ocultar carrusel e información*/
const seriesNav = document.getElementById("seriesNav");

seriesNav.addEventListener('click', hideStartSeries);

function hideStartSeries() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las series */
  const sectionSeries = ["tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312", "tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

  // const sectionSeriesId = orderMovie(sectionSeries, 'id', 'asc');
  // console.log(sectionSeriesId);

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionSeries.length; i++) {

    const idSerie = sectionSeries[i];

    fetch(`https://www.omdbapi.com/?i=${idSerie}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Drama */

/* Al hacer click en género ocultar carrusel e información*/
const dramaNav = document.getElementById("drama");

dramaNav.addEventListener('click', hideStartDrama);

function hideStartDrama() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las dramas */
  const sectionDrama = ["tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionDrama.length; i++) {

    const idDrama = sectionDrama[i];

    fetch(`https://www.omdbapi.com/?i=${idDrama}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}




/*---------------------------------------------------------------------------------*/

/* Género Comedia */

/* Al hacer click en género ocultar carrusel e información*/
const comedyNav = document.getElementById("comedy");

comedyNav.addEventListener('click', hideStartComedy);

function hideStartComedy() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las comedias */
  const sectionComedy = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionComedy.length; i++) {

    const idComedy = sectionComedy[i];

    fetch(`https://www.omdbapi.com/?i=${idComedy}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Acción */

/* Al hacer click en género ocultar carrusel e información*/
const actionNav = document.getElementById("action");

actionNav.addEventListener('click', hideStartAction);

function hideStartAction() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las de acción */
  const sectionAction = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionAction.length; i++) {

    const idAction = sectionAction[i];

    fetch(`https://www.omdbapi.com/?i=${idAction}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}







/*---------------------------------------------------------------------------------*/

/* Género Crimen */

/* Al hacer click en género ocultar carrusel e información*/
const crimeNav = document.getElementById("crime");

crimeNav.addEventListener('click', hideStartCrime);

function hideStartCrime() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas las de crimen */
  const sectionCrime = ["tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionCrime.length; i++) {

    const idCrime = sectionCrime[i];

    fetch(`https://www.omdbapi.com/?i=${idCrime}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Género Thriller */

/* Al hacer click en género ocultar carrusel e información*/
const thrillerNav = document.getElementById("thriller");

thrillerNav.addEventListener('click', hideStartThriller);

function hideStartThriller() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los trhiller */
  const sectionThriller = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionThriller.length; i++) {

    const idThriller = sectionThriller[i];

    fetch(`https://www.omdbapi.com/?i=${idThriller}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------*/

/* Género Romance */

/* Al hacer click en género ocultar carrusel e información*/
const romanceNav = document.getElementById("romance");

romanceNav.addEventListener('click', hideStartRomance);

function hideStartRomance() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los romances */
  const sectionRomance = ["tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionRomance.length; i++) {

    const idRomance = sectionRomance[i];

    fetch(`https://www.omdbapi.com/?i=${idRomance}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}



/*---------------------------------------------------------------------------------*/

/* Género Aventura */

/* Al hacer click en género ocultar carrusel e información*/
const adventureNav = document.getElementById("adventure");

adventureNav.addEventListener('click', hideStartAdventure);

function hideStartAdventure() {
  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";



  /* Desplegar todas los de aventura */
  const sectionAdventure = ["tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171"];

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  for (let i = 0; i < sectionAdventure.length; i++) {

    const idAdventure = sectionAdventure[i];

    fetch(`https://www.omdbapi.com/?i=${idAdventure}&apikey=90f8aca6`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        /* muestre en wrap tarjeta */
        let card = createCard(data);
        /* Añadir como hijos a div wrap */
        let cardWrap = document.getElementById('wrap');
        cardWrap.appendChild(card);

      });
  }
}


const topComedyMovie = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012"];
const topActionMovie = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064"];
const topThrillerMovie = ["tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413"];
const topAdventureMovie = ["tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796"];
const topDramaMovie = ["tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196"];
const topCrimeMovie = ["tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464"];
const topRomanceMovie = ["tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604"];



/*---------------------------------------------------------------------------------*/

const comedySeries = ["tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];
const actionSeries = ["tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312"];
const thrillerSeries = ["tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999"];
const adventureSeries = ["tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171"];
const dramaSeries = ["tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520"];
const crimeSeries = ["tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546"];
const romanceSeries = ["tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];

/*---------------------------------------------------------------------------------*/

/* Buscar título */

const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener('click', searchTitle);

function searchTitle() {


  let movieId = new Array();

  carouselStart.style.display = "none";
  information.style.display = "none";
  top.style.display = "block";

  /* pedir que vacie wrap en html */
  document.getElementById("wrap").innerHTML = "";

  fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=90f8aca6`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json.Response)
      const results = json.Search;
      console.log(results);

      for (let i = 0; i < results.length; i++) {
        movieId[i] = results[i].imdbID;
      }
      console.log(movieId);


      for (let i = 0; i < movieId.length; i++) {

        const idSearch = movieId[i];
        console.log(idSearch);

        fetch(`https://www.omdbapi.com/?i=${idSearch}&apikey=90f8aca6`)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);

            /* muestre en wrap tarjeta */
            let card = createCard(data);
            /* Añadir como hijos a div wrap */
            let cardWrap = document.getElementById('wrap');
            cardWrap.appendChild(card);

          });
      }

    })
}

/*---------------------------------------------------------------------------------*/

// const all = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012", "tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064", "tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413", "tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796", "tt0111161", "tt1375666", "tt0076759", "tt0068646", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt1302006", "tt8946378", "tt7286456", "tt0068646", "tt0056193", "tt0110912", "tt0993846", "tt3402236", "tt0099685", "tt0264464", "tt0109830", "tt0118799", "tt0034583", "tt0027977", "tt0021749", "tt5311514", "tt0338013", "tt0211915", "tt0119217", "tt0053604", "tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866", "tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312", "tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999", "tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171", "tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520", "tt10680606", "tt7450814", "t0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546", "tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];
//
// /* Al hacer click en ordenar por, ocultar carrusel e información*/
// const OrderAzNav = document.getElementById("orderAz");
//
// OrderAzNav.addEventListener('click', hideStartOrderAz);
//
// function hideStartOrderAz() {
//   carouselStart.style.display = "none";
//   information.style.display = "none";
//   top.style.display = "block";
//
//   /* pedir que vacie wrap en html */
//   document.getElementById("wrap").innerHTML = "";
//
//   for (let i = 0; i < all.length; i++) {
//
//     const orderAz = all[i];
//
//     fetch(`https://www.omdbapi.com/?i=${orderAz}&apikey=90f8aca6`)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data);
//         orderMovie(data, 'title', 'A-Z');
//         /* muestre en wrap tarjeta */
//         let card = createCard(data);
//         /* Añadir como hijos a div wrap */
//         let cardWrap = document.getElementById('wrap');
//         cardWrap.appendChild(card);
//
//       });
//   }
// }