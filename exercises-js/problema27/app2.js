const titulo = document.createElement('h2');
titulo.textContent = "Presupuesto de Equipo de Computación";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Función para crear select con opciones
function crearSelect(labelText, id, opciones) {
    const label = document.createElement('label');
    label.textContent = labelText;
    form.appendChild(label);

    const select = document.createElement('select');
    select.id = id;
    form.appendChild(select);

    opciones.forEach(op => {
        const option = document.createElement('option');
        option.value = op.valor;
        option.textContent = op.nombre;
        select.appendChild(option);
    });

    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    return select;
}

// Opciones
const opcionesProcesador = [
    {nombre: "Seleccione...", valor: 0},
    {nombre: "Intel I3 - $400", valor: 400},
    {nombre: "Intel I5 - $600", valor: 600},
    {nombre: "Intel I7 - $800", valor: 800}
];

const opcionesMonitor = [
    {nombre: "Seleccione...", valor: 0},
    {nombre: "Samsung 20' - $250", valor: 250},
    {nombre: "Samsung 22' - $350", valor: 350},
    {nombre: "Samsung 26' - $550", valor: 550}
];

const opcionesDisco = [
    {nombre: "Seleccione...", valor: 0},
    {nombre: "500 Gb - $300", valor: 300},
    {nombre: "1 Tb - $440", valor: 440},
    {nombre: "3 Tb - $500", valor: 500}
];

// Crear selects
const selectProcesador = crearSelect("Procesador: ", "procesador", opcionesProcesador);
const selectMonitor = crearSelect("Monitor: ", "monitor", opcionesMonitor);
const selectDisco = crearSelect("Disco Duro: ", "disco", opcionesDisco);

// Botón calcular
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = "Calcular";
form.appendChild(boton);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

// Input total
const labelTotal = document.createElement('label');
labelTotal.textContent = "Total: ";
form.appendChild(labelTotal);

const inputTotal = document.createElement('input');
inputTotal.type = 'text';
inputTotal.id = 'total';
inputTotal.readOnly = true;
form.appendChild(inputTotal);

// Función calcular total
function calcularPresupuesto() {
    let procesador = parseInt(selectProcesador.value);
    let monitor = parseInt(selectMonitor.value);
    let disco = parseInt(selectDisco.value);

    let total = procesador + monitor + disco;
    inputTotal.value = '$' + total;
}

// Evento click
boton.addEventListener('click', calcularPresupuesto);
