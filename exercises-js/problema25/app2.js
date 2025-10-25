const titulo = document.createElement('h2');
titulo.textContent = "Comparar dos números";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

const label1 = document.createElement('label');
label1.textContent = "Primer número: ";
form.appendChild(label1);

const input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'num1';
form.appendChild(input1);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const label2 = document.createElement('label');
label2.textContent = "Segundo número: ";
form.appendChild(label2);

const input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'num2';
form.appendChild(input2);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = "Mostrar Mayor";
form.appendChild(boton);

function mostrarMayor() {
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    if (num1 > num2) {
        alert('El mayor es: ' + num1);
    } else if (num2 > num1) {
        alert('El mayor es: ' + num2);
    } else {
        alert('Los números son iguales');
    }
}

boton.addEventListener('click', mostrarMayor);
