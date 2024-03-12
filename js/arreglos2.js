let juegos = [ 'pokemon', 'Mario', 'Megaman', 'Zelda' ];
console.log('largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length -1]
console.log({primero, ultimo})

juegos.forEach( (elemento, indice, array)=>{
  console.log(elemento, indice, array);
});
