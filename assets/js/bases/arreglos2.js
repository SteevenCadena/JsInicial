


let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];
console.log({ ultimo });

juegos.forEach( (elemento, indice, arr)=>{
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('GTA IV');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado });
console.log('=======');

let pos = 1;
console.log( juegos );

let juegosBorrados = juegos.splice( pos, 2 );
console.log( juegosBorrados, juegos );

let gtaIndex = juegos.indexOf('GTA IV');
console.log( gtaIndex ); 