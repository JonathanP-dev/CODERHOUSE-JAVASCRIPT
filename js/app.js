const numbers = []

const addNumber = () => {
  let number;
  let isNumber = true;
  alert( `
El programa guarda numeros en un array y los imprime en consola.
Va a solicitar numeros hasta que se ingrese 0 o un valor no numerico.
Cuando ocurra lo ultimo va a terminar de pedir e imprimir el array ordenado en cosola.
  `)
  do {
    number = parseInt( prompt( 'Ingrese un numero: ' ) )
    if ( !number ) {
      isNumber = false
      console.log( sortNumbers( numbers ) )
      return
    }
    numbers.push( number )
  } while ( isNumber )
}

const sortNumbers = ( numbers ) => {
  const sortedNumbers = numbers.sort( ( a, b ) => a - b )
  return sortedNumbers
}
addNumber()