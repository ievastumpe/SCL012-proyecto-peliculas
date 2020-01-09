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