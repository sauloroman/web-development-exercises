const titulo = document.createElement('h2');
titulo.textContent = "Concatenar nombre y apellido";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

const labelNombre = document.createElement('label');
labelNombre.textContent = "Nombre: ";
form.appendChild(labelNombre);

const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.id = 'nombre';
form.appendChild(inputNombre);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const labelApellido = document.createElement('label');
labelApellido.textContent = "Apellido: ";
form.appendChild(labelApellido);

const inputApellido = document.createElement('input');
inputApellido.type = 'text';
inputApellido.id = 'apellido';
form.appendChild(inputApellido);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = "Concatenar";
form.appendChild(boton);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const labelResultado = document.createElement('label');
labelResultado.textContent = "Nombre completo: ";
form.appendChild(labelResultado);

const inputResultado = document.createElement('input');
inputResultado.type = 'text';
inputResultado.id = 'resultado';
inputResultado.readOnly = true;
form.appendChild(inputResultado);

function concatenar() {
    let nombre = inputNombre.value.trim();
    let apellido = inputApellido.value.trim();
    let nombreCompleto = nombre + ' ' + apellido;
    inputResultado.value = nombreCompleto;
}

boton.addEventListener('click', concatenar);
