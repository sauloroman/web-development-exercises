document.body.innerHTML = "<h2>Ejercicio 5 - Clasificación de triángulos</h2>";

const tipos = { equilatero: 0, isosceles: 0, escaleno: 0 };
const salida = document.createElement("div");

for (let i = 1; i <= 4; i++) {
  const a = parseFloat(prompt(`Triángulo ${i} - Lado A:`));
  const b = parseFloat(prompt(`Triángulo ${i} - Lado B:`));
  const c = parseFloat(prompt(`Triángulo ${i} - Lado C:`));

  let tipo;
  if (a === b && b === c) tipo = "equilatero";
  else if (a === b || a === c || b === c) tipo = "isosceles";
  else tipo = "escaleno";

  tipos[tipo]++;
  salida.innerHTML += `<p>Triángulo ${i}: ${tipo}</p>`;
}

salida.innerHTML += `
  <h4>Totales:</h4>
  <p>Equiláteros: ${tipos.equilatero}</p>
  <p>Isósceles: ${tipos.isosceles}</p>
  <p>Escalenos: ${tipos.escaleno}</p>
`;

const menor = Object.entries(tipos).reduce((a, b) => (b[1] < a[1] ? b : a));
salida.innerHTML += `<p><strong>Menor cantidad:</strong> ${menor[0]}</p>`;

document.body.appendChild(salida);
