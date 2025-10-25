const titulo = document.createElement('h2');
titulo.textContent = "Búsqueda de palabra en texto";
document.body.appendChild(titulo);

const resultado = document.createElement('p');
document.body.appendChild(resultado);

let textoFuente = prompt('Ingrese una frase o texto:').trim();
let clave = prompt('Ingrese la palabra a buscar:').trim();

let textoMin = textoFuente.toLowerCase();
let claveMin = clave.toLowerCase();

let posicion = textoMin.indexOf(claveMin);

if (posicion !== -1) {
    resultado.textContent = `La palabra "${clave}" se encontró en la posición: ${posicion}.`;
} else {
    resultado.textContent = `La palabra "${clave}" no se encuentra en el texto.`;
}
