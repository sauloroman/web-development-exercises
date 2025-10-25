const titulo = document.createElement('h2');
titulo.textContent = "Verificación de edad";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Pregunta
const p = document.createElement('p');
p.textContent = "¿Es mayor de 18 años?";
form.appendChild(p);

// Crear radios
const opciones = [
    {id: 'si', valor: 'si', texto: 'Sí'},
    {id: 'no', valor: 'no', texto: 'No'}
];

opciones.forEach(op => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = op.id;
    input.name = 'edad';
    input.value = op.valor;
    form.appendChild(input);

    const label = document.createTextNode(' ' + op.texto);
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
});

form.appendChild(document.createElement('br'));

// Botón verificar
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = 'Verificar';
form.appendChild(boton);

function verificarEdad() {
    if (document.getElementById('si').checked) {
        alert('Puede ingresar al sitio');
    } else if (document.getElementById('no').checked) {
        alert('No puede ingresar al sitio');
    } else {
        alert('Debe seleccionar una opción');
    }
}

boton.addEventListener('click', verificarEdad);
