const titulo = document.createElement('h2');
titulo.textContent = "Deportes que practica";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Crear checkboxes
const deportes = [
    {id: 'futbol', nombre: 'Fútbol'},
    {id: 'basket', nombre: 'Básket'},
    {id: 'tenis', nombre: 'Tenis'}
];

deportes.forEach(dep => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = dep.id;
    form.appendChild(input);

    const label = document.createTextNode(' ' + dep.nombre);
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
});

form.appendChild(document.createElement('br'));

// Botón mostrar
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = 'Mostrar Deportes';
form.appendChild(boton);

function mostrarDeportes() {
    let seleccionados = '';

    deportes.forEach(dep => {
        if (document.getElementById(dep.id).checked) {
            seleccionados += dep.nombre + ' ';
        }
    });

    if (seleccionados === '') {
        alert('No seleccionó ningún deporte');
    } else {
        alert('Deportes seleccionados: ' + seleccionados);
    }
}

boton.addEventListener('click', mostrarDeportes);
