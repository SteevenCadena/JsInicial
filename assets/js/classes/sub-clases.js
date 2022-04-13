

class Persona {
    
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instalcias';
    }

    static mensaje() {
        console.log('Hola soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = ''; 

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase; 

        Persona._conteo ++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de AA ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }


    
}

class Heroe extends Persona{

    clan = 'Sin Clan';

    constructor( nombre, codigo, frase, clan) {
        super(nombre, codigo, frase);

        this.clan = clan;
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }

}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman', 'Los Avengers');
console.log( spiderman );
spiderman.quienSoy();