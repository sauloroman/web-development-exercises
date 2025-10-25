const titulo = document.createElement('h2');
titulo.textContent = "Libro de Visitas";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Nombre
const labelNombre = document.createTextNode("Nombre: ");
form.appendChild(labelNombre);

const inputNombre = document.createElement('input');
inputNombre.type = 'text';
inputNombre.id = 'nombre';
form.appendChild(inputNombre);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Mail
const labelMail = document.createTextNode("Mail: ");
form.appendChild(labelMail);

const inputMail = document.createElement('input');
inputMail.type = 'text';
inputMail.id = 'mail';
form.appendChild(inputMail);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Comentarios
const labelComentarios = document.createTextNode("Comentarios:");
form.appendChild(labelComentarios);
form.appendChild(document.createElement('br'));

const textareaComentarios = document.createElement('textarea');
textareaComentarios.id = 'comentarios';
textareaComentarios.rows = 5;
textareaComentarios.cols = 40;
form.appendChild(textareaComentarios);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Botón enviar
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = 'Enviar';
form.appendChild(boton);

function mostrarDatos() {
    let nombre = inputNombre.value;
    let mail = inputMail.value;
    let comentarios = textareaComentarios.value;

    let mensaje = 'Nombre: ' + nombre + '\n';
    mensaje += 'Mail: ' + mail + '\n';
    mensaje += 'Comentarios: ' + comentarios;

    alert(mensaje);
}

boton.addEventListener('click', mostrarDatos);
