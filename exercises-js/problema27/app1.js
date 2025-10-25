const titulo = document.createElement('h2');
titulo.textContent = "Seleccione una pizza";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

const labelPizza = document.createElement('label');
labelPizza.textContent = "Pizza: ";
form.appendChild(labelPizza);

const select = document.createElement('select');
select.id = 'pizzas';
form.appendChild(select);

const opcionDefault = document.createElement('option');
opcionDefault.value = '';
opcionDefault.textContent = 'Seleccione...';
select.appendChild(opcionDefault);

const opciones = [
    {nombre: 'Jamón y Queso - $8', valor: '8'},
    {nombre: 'Mozzarella - $6', valor: '6'},
    {nombre: 'Morrones - $10', valor: '10'}
];

opciones.forEach(op => {
    const option = document.createElement('option');
    option.value = op.valor;
    option.textContent = op.nombre;
    select.appendChild(option);
});

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

const labelPrecio = document.createElement('label');
labelPrecio.textContent = "Precio: ";
form.appendChild(labelPrecio);

const inputPrecio = document.createElement('input');
inputPrecio.type = 'text';
inputPrecio.id = 'precio';
inputPrecio.readOnly = true;
form.appendChild(inputPrecio);

function mostrarPrecio() {
    let precio = select.value;
    inputPrecio.value = precio ? '$' + precio : '';
}

select.addEventListener('change', mostrarPrecio);
