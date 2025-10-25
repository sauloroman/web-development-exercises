const titulo = document.createElement('h2');
titulo.textContent = "Presione un botón";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

function presionar(numero) {
    alert('Se presionó el botón número ' + numero);
}

for (let i = 1; i <= 3; i++) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.textContent = i;
    boton.addEventListener('click', () => presionar(i));
    form.appendChild(boton);
}
