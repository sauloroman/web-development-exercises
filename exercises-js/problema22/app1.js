const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

let numero = parseFloat(prompt("Ingrese un número para elevar al cubo"));
let resultado = Math.pow(numero, 3);

const resultadoParrafo = document.createElement('p');
resultadoParrafo.innerHTML = `El número ${numero} elevado al cubo es: ${resultado}`;
contenedor.appendChild(resultadoParrafo);
