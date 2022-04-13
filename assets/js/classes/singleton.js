

class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre = '' ) {
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }

}


const instancia1 = new Singleton('Carlos');
const instancia2 = new Singleton('Steeven');
console.log(`Nombre en la instancia 1 es ${ instancia1.nombre }`);
console.log(`Nombre en la instancia 2 es ${ instancia2.nombre }`);