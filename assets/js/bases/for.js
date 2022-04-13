
const juegos = ['GTA I', 'GTA II', 'GTA III', 'GTA IV'];


for( let i = 0; i < juegos.length; i++) {
    console.log( juegos[i] );
}

console.log('IN');
for( let i in juegos ) {
    console.log( juegos[i] );
}

console.log('OF');
for ( let juego of juegos ) {
    console.log( juego );
}