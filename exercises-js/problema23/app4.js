const titulo = document.createElement('h2');
titulo.textContent = "Verificador de Palíndromos";
document.body.appendChild(titulo);

const resultado = document.createElement('p');
document.body.appendChild(resultado);

let palabra = prompt('Ingrese una palabra:').trim();

let palabraInvertida = '';
for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
}

if (palabra.toLowerCase() === palabraInvertida.toLowerCase()) {
    resultado.textContent = `"${palabra}" es un palíndromo.`;
} else {
    resultado.textContent = `"${palabra}" no es un palíndromo.`;
}