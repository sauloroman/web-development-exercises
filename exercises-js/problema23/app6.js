const titulo = document.createElement('h2');
titulo.textContent = "Análisis de texto con funciones en JavaScript";
document.body.appendChild(titulo);

const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

let cadena = prompt('Ingrese un texto:').trim();

function primeraMitad(str) {
    let mitad = Math.floor(str.length / 2);
    return str.substring(0, mitad);
}

function ultimoCaracter(str) {
    return str[str.length - 1];
}

function invertir(str) {
    let invertido = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertido += str[i];
    }
    return invertido;
}

function separarConGuiones(str) {
    let resultado = '';
    for (let i = 0; i < str.length; i++) {
        resultado += str[i];
        if (i < str.length - 1) {
            resultado += '-';
        }
    }
    return resultado;
}

function contarVocales(str) {
    let contador = 0;
    let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    for (let i = 0; i < str.length; i++) {
        if (vocales.indexOf(str[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}

const resultados = [
    `Texto ingresado: ${cadena}`,
    `a) Primera mitad: ${primeraMitad(cadena)}`,
    `b) Último carácter: ${ultimoCaracter(cadena)}`,
    `c) Forma inversa: ${invertir(cadena)}`,
    `d) Con guiones: ${separarConGuiones(cadena)}`,
    `e) Cantidad de vocales: ${contarVocales(cadena)}`
];

resultados.forEach(texto => {
    const p = document.createElement('p');
    p.textContent = texto;
    contenedor.appendChild(p);
});
