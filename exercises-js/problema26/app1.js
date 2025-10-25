const titulo = document.createElement('h2');
titulo.textContent = "Validar contraseña";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

const label1 = document.createElement('label');
label1.textContent = "Ingrese su clave: ";
form.appendChild(label1);

const input1 = document.createElement('input');
input1.type = 'password';
input1.id = 'clave1';
form.appendChild(input1);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const label2 = document.createElement('label');
label2.textContent = "Reingrese su clave: ";
form.appendChild(label2);

const input2 = document.createElement('input');
input2.type = 'password';
input2.id = 'clave2';
form.appendChild(input2);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = "Verificar";
form.appendChild(boton);

function compararClaves() {
    let clave1 = input1.value;
    let clave2 = input2.value;

    if (clave1 === clave2) {
        alert('Las claves son iguales');
    } else {
        alert('Las claves NO son iguales');
    }
}

boton.addEventListener('click', compararClaves);
