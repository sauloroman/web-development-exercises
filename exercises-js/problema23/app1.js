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

function ingresarNombres() {
    do {
        nombre = prompt('Ingrese un nombre (Fin para terminar):');
        if (nombre !== 'Fin') {
            contador++;
            
            const li = document.createElement("li");
            li.textContent = 'Nombre ' + contador + ': ' + nombre;
            listaNombres.appendChild(li);
        }
    } while (nombre !== 'Fin');

    totalParrafo.textContent = 'Total de nombres ingresados: ' + contador;
}

ingresarNombres();
