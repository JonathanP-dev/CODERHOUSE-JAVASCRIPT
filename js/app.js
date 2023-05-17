// aplicacion para ver informacion de peliculas
// la aplicacion va a obtener las peliculas y su informacion a traves de una api de peliculas
// mientras voy a usar imagenes locales y un array con el nombre de las peliculas

// la funcionalidad consta de poder elegir una pelicula para ver su informacion.
// posiblemente pueda agregarle filtros, ya sea por acategoria, anio o lo que sea.


const movies = [
  {
    title: 'IRON MAN 1',
    description: 'pelicula de Iron man 1, creada por Marvel.'
  },
  {
    title: 'CAPITAN AMERICA',
    description: 'pelicula de Capitan America, creada por Marvel.'
  },
  {
    title: 'IRON MAN 2',
    description: 'pelicula de Iron man 2, creada por Marvel.'
  },
  {
    title: 'HULK',
    description: 'pelicula de Hulk, creada por Marvel.'
  },
  {
    title: 'THOR',
    description: 'pelicula de Thor, creada por Marvel.'
  },
  {
    title: 'AVENGERS 1',
    description: 'pelicula de Avengers 1, creada por Marvel.'
  }
]

// funcion para listar las peliculas que se encuentran disponibles.
const moviesList = ( moviesArray ) => {
  let mensaje = 'Peliculas guardadas: ';

  for ( let i = 0; i < moviesArray.length; i++ ) {
    if ( i == ( moviesArray.length - 1 ) ) {
      mensaje = mensaje + `${moviesArray[i].title}.`;
      break
    }
    mensaje = mensaje + `${moviesArray[i].title}, `;
  }
  alert( mensaje )
}
// funcion para obtener la pelicula que el usuario quiere ver
// la idea es simular que el usuario escribe en el formulario y presiona el boton de buscar 
// puede que le agregue un debounce al input (????)
const chooseYourMovie = () => {
  let movie;

  alert( `
El programa cuenta con un arreglo de peliculas (una base de datos).
En el siguiente prompt tu vas a poder ingresar el nombre de una pelicula.
Si la misma se encuentra en el arreglo te va a devolver por alert los datos de la misma.
Si no la encuentra te devolvera "pelicula no encontrada"
  `)
  moviesList( movies );
  movie = prompt( 'Ingrese el nombre de la pelicula a buscar: ' )

  // chequeamos que no haya dejado el prompt vacio
  if ( movie.length < 1 ) {
    alert( 'No has ingresado una pelicula' )
    return
  }

  // me aseguro que todo el texto este en mayuscula
  movie = movie.toUpperCase();
  console.log( movie )

  // busco en el arreglo si coincide el texto ingresado por prompt con el title de alguna de las peliculas
  const found = movies.find( peli => peli.title == movie )
  console.log( found )

  // si no existe ya retorno y muestro que no existe
  if ( !found ) {
    alert( `La pelicula ${movie} no se encuentra en nuestra base de datos.` )
    return
  }

  // si llega hasta aca es porque paso todas las validaciones asi que muestro la descripcion 
  alert( found.description )
}

chooseYourMovie()