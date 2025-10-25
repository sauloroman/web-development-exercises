class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
    }

    cargar() {
        this.nombre = prompt('Ingrese nombre:');
        this.edad = parseInt(prompt('Ingrese edad:'));
    }

    esMayorEdadTope(edadTope) {
        return this.edad > edadTope;
    }
}

class Empresa {
    constructor() {
        this.edadTope = 60;
    }
}

let persona1 = new Persona();
let persona2 = new Persona();
let persona3 = new Persona();
let empresa = new Empresa();

persona1.cargar();
persona2.cargar();
persona3.cargar();

let inhabilitados = 0;

if (persona1.esMayorEdadTope(empresa.edadTope)) {
    inhabilitados++;
}
if (persona2.esMayorEdadTope(empresa.edadTope)) {
    inhabilitados++;
}
if (persona3.esMayorEdadTope(empresa.edadTope)) {
    inhabilitados++;
}

document.write('Cantidad de personas inhabilitadas: ' + inhabilitados);