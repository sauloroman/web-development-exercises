const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

const titulo = document.createElement("h2");
titulo.textContent = "Ingreso de Nombres";
contenedor.appendChild(titulo);

const listaNombres = document.createElement("ul");
contenedor.appendChild(listaNombres);

const totalParrafo = document.createElement("p");
contenedor.appendChild(totalParrafo);
let contador = 0;
let nombre;

function formatearOracion(texto) {
  texto = texto.trim();
  if (texto.length === 0) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function ingresarNombres() {
  do {
    nombre = prompt("Ingrese un nombre (Fin para terminar):");

    if (nombre === null) break;

    if (nombre.trim().toLowerCase() === "fin") break;

    let nombreFormateado = formatearOracion(nombre);

    if (nombreFormateado !== "") {
      contador++;
      const li = document.createElement("li");
      li.textContent = `Nombre ${contador}: ${nombreFormateado}`;
      listaNombres.appendChild(li);
    }

  } while (true);

  totalParrafo.textContent = `Total de nombres ingresados: ${contador}`;
}

ingresarNombres();
