const titulo = document.createElement('h2');
titulo.textContent = "Pedido de Pizzas";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Crear select de pizzas
const labelPizza = document.createElement('label');
labelPizza.textContent = "Tipo de pizza: ";
form.appendChild(labelPizza);

const selectPizza = document.createElement('select');
selectPizza.id = 'pizza';
form.appendChild(selectPizza);

const opcionesPizza = [
    {nombre: "Queso - $4", valor: 4},
    {nombre: "Jamón y queso - $6", valor: 6},
    {nombre: "Especial - $10", valor: 10}
];

opcionesPizza.forEach(op => {
    const option = document.createElement('option');
    option.value = op.valor;
    option.textContent = op.nombre;
    selectPizza.appendChild(option);
});

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Input cantidad
const labelCantidad = document.createElement('label');
labelCantidad.textContent = "Cantidad: ";
form.appendChild(labelCantidad);

const inputCantidad = document.createElement('input');
inputCantidad.type = 'text';
inputCantidad.id = 'cantidad';
form.appendChild(inputCantidad);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Botón calcular
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = "Calcular";
form.appendChild(boton);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Input total
const labelTotal = document.createElement('label');
labelTotal.textContent = "Total a pagar: ";
form.appendChild(labelTotal);

const inputTotal = document.createElement('input');
inputTotal.type = 'text';
inputTotal.id = 'total';
inputTotal.readOnly = true;
form.appendChild(inputTotal);

// Función calcular importe
function calcularImporte() {
    let precio = parseFloat(selectPizza.value);
    let cantidad = parseInt(inputCantidad.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    let total = precio * cantidad;
    inputTotal.value = '$' + total;
}

// Evento click
boton.addEventListener('click', calcularImporte);
