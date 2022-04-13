
const elMayor = ( a, b ) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log( elMayor( 5, 2) );
console.log( tieneMembresia(false));

const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki'
    
];

console.log( amigoArr );
