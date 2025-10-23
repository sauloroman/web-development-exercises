document.body.innerHTML = "<h2>Ejercicio 8 - Promedios de edades por turno</h2>";

function obtenerPromedio(cantidad, nombre) {
  let suma = 0;
  for (let i = 1; i <= cantidad; i++) {
    const edad = parseInt(prompt(`Edad del estudiante ${i} (${nombre}):`));
    suma += edad;
  }
  return suma / cantidad;
}

const promManiana = obtenerPromedio(5, "Turno Mañana");
const promTarde = obtenerPromedio(6, "Turno Tarde");
const promNoche = obtenerPromedio(11, "Turno Noche");

const salida = document.createElement("div");
salida.innerHTML = `
  <p>Promedio mañana: ${promManiana.toFixed(2)}</p>
  <p>Promedio tarde: ${promTarde.toFixed(2)}</p>
  <p>Promedio noche: ${promNoche.toFixed(2)}</p>
`;

const mayor = Math.max(promManiana, promTarde, promNoche);
let turnoMayor = "";

if (mayor === promManiana) turnoMayor = "Mañana";
else if (mayor === promTarde) turnoMayor = "Tarde";
else turnoMayor = "Noche";

salida.innerHTML += `<p><strong>Turno con mayor promedio:</strong> ${turnoMayor}</p>`;
document.body.appendChild(salida);
