
// function crearPersona( nombre, apellido ) {
//     return {nombre,apellido}
// }

const crearPersona = ( nombre, apellido ) => ({nombre, apellido});

const persona = crearPersona('Carlos', 'Cadena');
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args} );
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Carlos', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Carlos', 'Cadena');

console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    condName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
console.log( '========' );
// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre',personaje.nombre );
//     console.log( 'condName',personaje.condName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );
// }
const imprimePropiedades = ({ nombre, condName, edad = 0, trajes }) => {
    console.log({nombre});
    console.log({condName});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );