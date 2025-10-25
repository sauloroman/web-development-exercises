const contenedor = document.createElement('div');
document.body.appendChild(contenedor);


let vector = [];
let acumuladoTotal = 0;
let acumuladoMayor36 = 0;
let cantidadMayor50 = 0;

alert("Vector con suma y contador.");

for (let i = 0; i < 8; i++) {
    vector[i] = parseInt(prompt('Ingrese elemento ' + (i + 1) + ':'));

    acumuladoTotal += vector[i];

    if (vector[i] > 36) {
        acumuladoMayor36 += vector[i];
    }

    if (vector[i] > 50) {
        cantidadMayor50++;
    }
}

// Mostrar resultados
const resultado = document.createElement('p');
resultado.innerHTML = 
    'Vector ingresado: ' + vector + '<br>' +
    'Valor acumulado total: ' + acumuladoTotal + '<br>' +
    'Acumulado de valores mayores a 36: ' + acumuladoMayor36 + '<br>' +
    'Cantidad de valores mayores a 50: ' + cantidadMayor50;
contenedor.appendChild(resultado);
