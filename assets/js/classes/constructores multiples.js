
class Persona {

    static porObjeto( { nombre, apellido, pais } ) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;    
    } 

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }

}


const nombre1 = 'Anna',
      apellido1 = 'Reyes',
      pais1 = 'Ecuador';

const car =  {
    nombre: 'Carlos',
    apellido: 'Cadena',
    pais: 'Ecuador'
};

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( car );

persona1.getInfo();
console.log( persona2 );
persona2.getInfo();
