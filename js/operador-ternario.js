//dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

//entra a un sitio web, para consultar si está abierto hoy...

const dia = 1;  // 0: domingo, 1: lunes etc..
const horaActual = 10;

let horaApertura;
let mensaje;  //está abierto, está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//   console.log('fin de semana');
//   horaApertura = 9;
// } else {
//   console.log('Dia de semana');
//   horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = 'está abierto';
// } else {
//   mensaje = `está cerrado, abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'está abierto' : `está cerrado, abrimos a las ${horaApertura}`

console.log({ horaApertura, mensaje });