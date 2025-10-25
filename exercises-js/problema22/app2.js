const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

const titulo = document.createElement('h2');
titulo.textContent = "Parte 2";
contenedor.appendChild(titulo);

let numero2 = parseFloat(prompt("Ingrese un número para calcular su raíz"));
const resultadoParrafo = document.createElement('p');

if (numero2 < 0) {
    resultadoParrafo.textContent = "No es posible calcular raíces negativas";
} else {
    let resultado2 = Math.sqrt(numero2);
    resultadoParrafo.textContent = `La raíz cuadrada de ${numero2} es: ${resultado2}`;
}

contenedor.appendChild(resultadoParrafo);
