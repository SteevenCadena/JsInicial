


const car = {
    nombre: 'Carlos',
    edad: 23,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: '15',
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

car.imprimir();
pedro.imprimir();