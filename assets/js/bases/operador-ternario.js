
/**Dias de semana abromimos a las 11 */
/**
 * Fines de semana a las 9
 */

// Entra a un sitio web para consultar si está abierto hoy

const dia = 2;
const horaActual = 9;

let horaApertura;
let mensaje = ''//Está abierto, Está cerra, hoy abrimos  las XX

// if ( [0,6].includes( dia ) ) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Está Abierto';

// } else {
//     mensaje = `Está cerrado hoy abrimos a las ${horaApertura}`;
// }

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : 'Está cerrado';

console.log({ horaApertura, mensaje });