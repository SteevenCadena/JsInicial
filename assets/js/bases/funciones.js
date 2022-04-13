

function saludar( nombre ) {
    // console.log( arguments );
    // console.log( 'Hola ' + nombre  );    
    return [1, 2, 3, 4, 5];

    console.log('Soy copdigo que se ejecutara depues del return');
}

const saludar2 = function saludar( nombre ) {
    console.log( 'Hola ' + nombre);    
}

const saludarFlecha = () => {
    console.log('Hola Felcha');
}
const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar( 'Carlos', 40, true, 'Ecuador' );
// console.log( retornoDeSaludar );

// saludar2( 'Carlos' );
// saludarFlecha();
// saludarFlecha2('Anna');

function sumar( a, b ) {
    return a + b;
}

function getAleatorio() {
    return Math.random();
}


const getAleatorio2 = () => Math.random();

const sumar2 = ( a, b ) => a + b;

console.log( getAleatorio2() );
