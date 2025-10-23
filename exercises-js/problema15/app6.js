document.body.innerHTML = "<h2>Ejercicio 6 - Cuadrantes de puntos</h2>";

const n = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));
let cuadrantes = [0, 0, 0, 0];

for (let i = 1; i <= n; i++) {
  const x = parseFloat(prompt(`Punto ${i} - Coordenada x:`));
  const y = parseFloat(prompt(`Punto ${i} - Coordenada y:`));

  if (x > 0 && y > 0) cuadrantes[0]++;
  else if (x < 0 && y > 0) cuadrantes[1]++;
  else if (x < 0 && y < 0) cuadrantes[2]++;
  else if (x > 0 && y < 0) cuadrantes[3]++;
}

const res = document.createElement("div");
res.innerHTML = `
  <h4>Resultados:</h4>
  <p>1er cuadrante: ${cuadrantes[0]}</p>
  <p>2do cuadrante: ${cuadrantes[1]}</p>
  <p>3er cuadrante: ${cuadrantes[2]}</p>
  <p>4to cuadrante: ${cuadrantes[3]}</p>
`;

document.body.appendChild(res);
