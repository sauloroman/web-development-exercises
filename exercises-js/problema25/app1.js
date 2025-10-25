const titulo = document.createElement('h2');
titulo.textContent = "Calcular el cubo de un número";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

const label = document.createElement('label');
label.textContent = "Ingrese un número: ";
form.appendChild(label);

const input = document.createElement('input');
input.type = 'text';
input.id = 'numero';
form.appendChild(input);

const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = 'Calcular Cubo';
form.appendChild(boton);

function calcularCubo() {
    let numero = parseFloat(input.value);
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }
    let resultado = Math.pow(numero, 3);
    alert('El cubo de ' + numero + ' es: ' + resultado);
}

boton.addEventListener('click', calcularCubo);
