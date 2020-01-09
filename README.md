# "Proyecto" de final de _Common Core_, películas

 ## Índice

* [Introducción](#Introducción)
* [Resumen del proyecto](#resumen-del-proyecto)
* [Procesos y decisiones de diseño](#Procesos-y-decisiones-de-diseño)
* [Iteración](#Iteración)
* [Procesos](#Procesos)
* [Conclusión](#Conclusión)

 ***

 ## **Introducción**

En la actualidad, contamos con varias plataformas para ver peliculas o series via streaming, se está optando a estas plataformas por varias razones, ya sean por estar en la comodidad de el hogar, por no tener tiempo para ir al cine, por la variedad de contenido al que pueden acceder sólo con un click, etc.

También la era tecnológica en la que estamos inmersos, nos exije constantemente ver información de manera instantanea y en en lugar que nos encontremos.

Entonces surge la siguiente interrogante ¿Cómo mostrar a este usuario información precisa sobre qué peliculas o serie puede ver y evitar que indague por su cuenta sin tener resultados satisfactorios?


 ## **Resumen del proyecto**

Es por eso que se crea Top Movie, una página web enfocada en facilitar la busqueda de peliculas y series, recomendando las 10 mejores de cada una de sus categorías, basada en la crítica por espectadores, valoracion y género, entre otras, dando al usuario la solución a la problematica previamente señalada.

 * Características y necesidades del usuario

- Hombres y mujeres de entre 20-35 años.
- Los usuarios cuentan con una vida ajetreada y ven en estas plataformas un momento de distracción.
- Pierden mucho tiempo buscando qué pelicula o serie ver.
- Buscan información rápida y de fácil acceso.

Considerando lo anterior creamos nuestra historia de usuario que plantea lo siguiente

* "Yo como usuario quiero saber las mejores películas o series para ahorrar tiempo en la busqueda de estas"

Dicho lo anterior, con los siguientes criterios de aceptación podremos lograr que el prototipo cuente con los elementos necesarios.

- Una barra de menú que muestre las 2 categorias solicitadas(películas/series)
- Un menú desplegable que cuente con los género de Drama, Acción, Comedia, Thriller, Aventura, Romance y Crímen.
- Un menu desplegable que cuente con la opcion de ordenar los resultados por Año y Popularidad.
- Una tarjeta donde se muestre el resultado con informacion sobre el Nombre, Año, Director, Reparto, género, valoración y una reseña.

 ## **Decisiones de diseño**

En esta etapa, con lo señalado en los criterios de aceptación se realizan los primeros prototipos.

Dado a que que se trabajará con poster de diversos estilos y colores. Que será informativa y que se trabajará con varios datos, la pagina web se enfoca en un diseño minimlista, y estos poster serán los encargados de asignarle contraste a la página. Se elige un fondo blanco y simple para que no sea sobrecargado ni molesto de ver por los usuarios.


* Prototipo de baja fidelidad


![prototiposketch1]()



* Prototipo de Alta fidelidad

Una vez creados los primeros sketch de la página se pasa al siguiente prototipo que cuenta con una vista preliminar de cómo sería el diseño final.

![prototipo1](https://github.com/RuthMaureira/SCL012-proyecto-peliculas/blob/master/img/mapanavegaci%C3%B3n.png)


## **Test de Usabilidad**

La mejor forma de que el proyecto se adecue a las necesidades del usuario son con los test de usabiliad, que nos ayudarán a tener persepciones reales y directas con usuarios.

- [Video Usuario Nº1](https://www.loom.com/share/4e4be3e85e8f480b9d353a48408f7391)
- [Video Usuario Nº2](https://www.loom.com/share/3a07912e9cdc4aae8b1e9110db5bbd87)
- [Video Usuario Nº3](https://www.loom.com/share/1b99a2bc187c4a61af93345080cd5041)
- [Video Usuario Nº4](https://www.loom.com/share/8ee21af4a0984070a164bf9347973238)
- [Video Usuario Nº5](https://www.loom.com/share/fe46ddfb64094980bd70ef39075d9bb7)

## **Iteración**

Con los Test de Usabilidad podemos observar los requerimientos que los usuarios proponen, es por ello que iterar el diseño ayuda para llegrán a un mejor resultado.

[VER PROTOTIPO AQUÍ](https://www.figma.com/proto/RsqdGYbIbBUDNnqmBsRIkV/Api?node-id=127%3A0&scaling=scale-down)

## **Procesos**

Para el desarrolllo de la página web el equipo ocupará plataformas que lo harán posible.

En proceso de diseño UX para crear la experiencia más cercana al usuario con el resultado final. La plataforma Figma nos ayudará a elaborar un prototipo dinámico y navegable.

Obtendremos recursos del framework Boostrap para darle al usuario cercanía con las diferentes páginas web ya existentes y que así pueda manejearse de forma fluida.

En el proceso de Front-End se ocupará el editor de código Visual Studio Code para dar las funcionalidades e interacciónes solicitadas.

Para obtener las películas y series se trabajará con datos obtenidos desde la API de OMDB (The Open Movie Database).

* Asigación de Tareas

Cada integrante contará con una tarea para desarrollar, la que optimizará el proceso y contribuirá al resultado final.

- Consuelo:
- Ieva: aplicar fetch y API (OMDB) para traer data sobre series & peliculas; buscar información sobre los top 10 mejores peliculas de genero Comedia, Acción, Thriller, crear arrays.
- Ruth: 
- Fernanda:
- Camila: Analisis de usuario (historias de usuario, test de usabilidad), creacion de diseño y prototipos(desiciones de diseño,iteaciones), realizaciòn de readme.

 ## **Conclusión**

Nuestra página web viene a entregarle al usuario la confianza de encontrar una película y/o serie que esté dentro de las 10 mejores catalogadas dentro del género que desee, asi le facilitaremos la busqueda, ya que en estos tiempos se busca tener información lo mas precisa e instantanea posible.

Esto se hace posible obteniendo datos de la API de OMDB que nos brinda información fidedigna de cada película o serie, lo que le da la seguridad al usuario que podrá ver una película que será de su agrado.
