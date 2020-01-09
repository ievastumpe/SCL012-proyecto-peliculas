/* Ordenar alfabéticamente, ID, altura y peso */

/* A-Z: Si a<b return -1, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si a=b retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes.
Si a>b return 1, se sitúa b en un indice menor que a.*/

export let orderMovie = (dataMovie, sortBy, sortOrder) => {

  /*Ordenar alfabeticamente */
  if (sortBy === "title" && sortOrder === "A-Z") {
    return dataMovie.sort(function(a, b) {
      if (a.Title == b.Title) {
        return 0;
      }
      if (a.Title > b.Title) {
        return 1;
      } else {
        return -1;
      }
    });
  } else if (sortBy === "title" && sortOrder === "Z-A") {
    return dataMovie.sort(function(a, b) {
      if (b.Title == a.Title) {
        return 0;
      }
      if (b.Title > a.Title) {
        return 1;
      } else {

        return -1;
      }
    });
  }

  /* Ordenar por id */
  else if (sortBy == "id" && sortOrder == "asc") {
    return dataMovie.sort((a, b) => (a.imdbID - b.imdbID));
  } else if (sortBy == "id" && sortOrder == "desc") {
    return dataMovie.sort((a, b) => (b.imdbID - a.imdbID));
  }

  /* Ordenar por popularidad */
  else if (sortBy == "rating" && sortOrder == "asc") {
    return dataMovie.sort((a, b) => (parseFloat(a.imdbRating) - parseFloat(b.imdbRating)));
  } else if (sortBy == "rating" && sortOrder == "desc") {
    return dataMovie.sort((a, b) => (parseFloat(b.imdbRating) - parseFloat(a.imdbRating)));
  }

  /* Ordenar por mejor o peor crítica - calificación */
  else if (sortBy == "metascore" && sortOrder == "asc") {
    return dataMovie.sort((a, b) => (parseFloat(a.Metascore) - parseFloat(b.Metascore)));
  } else if (sortBy == "metascore" && sortOrder == "desc") {
    return dataMovie.sort((a, b) => (parseFloat(b.Metascore) - parseFloat(a.Metascore)));
  }

  /*Ordenar por año */
  else if (sortBy == "year" && sortOrder == "asc") {
    return dataMovie.sort((a, b) => (a.Year - b.Year));
  } else if (sortBy == "year" && sortOrder == "desc") {
    return dataMovie.sort((a, b) => (b.Year - a.Year));
  }


};

// //llamando data de las peliculas
// const urlOmdbMovie = `http://www.omdbapi.com/?apikey=90f8aca6&s=movie`;
// fetch(urlOmdbMovie)
// .then(response => response.json())
// .then(data => {
//   console.log(data)} )
// .catch(error => console.error('Hay un error'))
//
//
// //llamando data de las series
// const urlOmdbSerie = `http://www.omdbapi.com/?apikey=90f8aca6&s=series`;
// fetch(urlOmdbSerie)
// .then(response => response.json())
// .then(data => {
//   console.log(data)} )
// .catch(error => console.error('Hay un error'))
//
// //Arays para peliculas de genero: Comedy, Action, Thriller
// const topComedy = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553", "tt0027977", "tt0021749", "tt1187043", "tt0057012"];
// const topAction = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064"];
// const topThriller = ["tt0468569", "tt1375666", "tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413"];
