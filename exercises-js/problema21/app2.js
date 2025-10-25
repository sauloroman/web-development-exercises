const contenedor = document.createElement('div');
document.body.appendChild(contenedor);

let vector1 = [], vector2 = [], vectorRes = [];
let cantidad, suma;

alert("Vectores que se suman y se almacenan en otro.");
cantidad = parseInt(prompt("¿De qué tamaño desea que sea el vector? "));

for (let i = 0; i < cantidad; i++) {
    vector1[i] = parseInt(prompt(`Ingrese el elemento ${i + 1} para el primer vector:`));
    vector2[i] = parseInt(prompt(`Ingrese el elemento ${i + 1} para el segundo vector:`));
    suma = vector1[i] + vector2[i];
    vectorRes[i] = suma;
}

// Mostrar resultados
const resultado = document.createElement('p');
resultado.innerHTML =
    `Valores dentro del primer vector: ${vector1} <br>` +
    `Valores dentro del segundo vector: ${vector2} <br>` +
    `Valores de la suma de los vectores: ${vectorRes}`;
contenedor.appendChild(resultado);
