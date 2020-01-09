/* Ordenar alfabéticamente, ID, altura y peso */

/* A-Z: Si a<b return -1, se sitúa a en un indice menor que b. Es decir, a viene primero.
Si a=b retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes.
Si a>b return 1, se sitúa b en un indice menor que a.*/

export let orderMovie = (dataMovie, sortBy, sortOrder) => {
  /*data de peliculas DRAMA , COMEDIA, ACCION, CRIMEN, THRILLER, ROMANCE, AVENTURA*/
  let dramaMovies= ["tt0111161","tt1375666","tt0076759","tt0068646","tt0468569","tt0050083","tt0108052","tt0167260","tt0110912","tt0060196"];
  let crimeMovies=["tt1302006","tt8946378","tt7286456","tt0068646","tt0056193","tt0110912","tt0993846","tt3402236","tt0099685","tt0264464"];
  let aventureMovie= ["tt0167260", "tt1375666", "tt0120737", "tt0167261", "tt0080684", "tt0816692", "tt0245429", "tt0076759", "tt0047478", "tt4154796"];
  let topAccion = ["tt0468569", "tt5813916", "tt1375666", "tt0133093", "tt0047478", "tt4154796", "tt4154756", "tt0172495", "tt0110413", "tt0103064"];
  let topComedy = ["tt0252487", "tt6751668", "tt0118799", "tt1675434", "tt0088763", "tt0032553" "tt0027977", "tt0021749", "tt1187043", "tt0057012"];
  let topThriller = ["tt0468569" ,"tt1375666" ,"tt7286456", "tt6751668", "tt0114369", "tt0102926", "tt0482571", "tt0407887", "tt0114814", "tt0110413"];
  /*DATA SERIE DRAMA , COMEDIA, ACCION, CRIMEN, THRILLER, ROMANCE, AVENTURA*/
  let topSaccion = ["tt0944947", "tt1355642", "tt8111088", "tt2098220", "tt1909015", "tt1190634", "tt0407362", "tt0384766", "tt0214341", "tt3322312"];
  topScrimen = ["tt10680606" , "tt7450814", "tt0903747", "tt10073114", "tt0306414", "tt6108262", "tt0141842", "tt1475582", "tt2356777", "tt6456546"];
  topScomedy = ["tt8595766", "tt7927936", "tt9432978", "tt8809646", "tt10530900", "tt1043822", "tt8254348", "tt5851616", "tt5788792", "tt5182866"];
  topSdrama = ["id:tt0244911", "tt0077051", "tt8317568", "tt8232504", "tt4062640", "tt2063241", "tt1708523", "tt2403201", "tt10449366", "tt0052520"];
  topSthiller = ["tt11318602", "tt11307176", "tt0053546", "tt8300324", "tt2737290", "tt0291671", "tt1330059", "tt0969784", "tt8364148", "tt1500999"];
  topSromance = ["tt11546860", "tt0083416", "tt5555260", "tt4094300", "tt3910804", "tt4379450", "tt3920596", "tt3228420", "tt2955402", "tt3314218"];
  topSaventure = ["tt2306299", "tt0411008", "tt2861424", "tt2661044", "tt2560140", "tt5180504", "tt2375692", "tt0409591", "tt1051220", "tt1312171"];
  const containerMovies = document.getElementById("container");
  function bestActorCard (data){
    if (data === aventureMovie){
        containerMovies.innerHTML +=
    `<div class="wrap">
      <div class="tarjetaActors">
        
      </div>
    </div>`
    }
  }

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
