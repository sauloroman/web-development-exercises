class Suma {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }

    primerValor(v1) {
        this.valor1 = v1;
    }

    segundoValor(v2) {
        this.valor2 = v2;
    }

    retornarResultado() {
        return this.valor1 + this.valor2;
    }
}

let s = new Suma();
s.valor1 = parseFloat(prompt('Coloca el primer valor'));
s.valor2 = parseFloat(prompt('Coloca el segundo valor'));
document.write('La suma de los dos valores es: ' + s.retornarResultado());