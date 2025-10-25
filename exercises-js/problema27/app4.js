const titulo = document.createElement('h2');
titulo.textContent = "Examen Múltiple Choice";
document.body.appendChild(titulo);

const form = document.createElement('form');
document.body.appendChild(form);

// Preguntas y opciones
const preguntas = [
    {pregunta: "1. ¿Cuál es la capital de Francia?", opciones: [
        {valor: 'a', texto: 'Londres'},
        {valor: 'b', texto: 'París'},
        {valor: 'c', texto: 'Berlín'}
    ]},
    {pregunta: "2. ¿Cuánto es 2 + 2?", opciones: [
        {valor: 'a', texto: '4'},
        {valor: 'b', texto: '22'},
        {valor: 'c', texto: '5'}
    ]},
    {pregunta: "3. ¿En qué año llegó el hombre a la luna?", opciones: [
        {valor: 'a', texto: '1965'},
        {valor: 'b', texto: '1970'},
        {valor: 'c', texto: '1969'}
    ]},
    {pregunta: "4. ¿Cuál es el planeta más grande del sistema solar?", opciones: [
        {valor: 'a', texto: 'Saturno'},
        {valor: 'b', texto: 'Júpiter'},
        {valor: 'c', texto: 'Neptuno'}
    ]}
];

// Respuestas correctas
const respuestasCorrectas = ['b', 'a', 'c', 'b'];

preguntas.forEach((p, i) => {
    const pTag = document.createElement('p');
    pTag.innerHTML = `<strong>${p.pregunta}</strong>`;
    form.appendChild(pTag);

    const select = document.createElement('select');
    select.id = 'p' + (i+1);

    const opcionDefault = document.createElement('option');
    opcionDefault.value = '';
    opcionDefault.textContent = 'Seleccione...';
    select.appendChild(opcionDefault);

    p.opciones.forEach(op => {
        const option = document.createElement('option');
        option.value = op.valor;
        option.textContent = op.texto;
        select.appendChild(option);
    });

    form.appendChild(select);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
});

// Botón Calificar
const boton = document.createElement('button');
boton.type = 'button';
boton.textContent = 'Calificar';
form.appendChild(boton);

function calificar() {
    let correctas = 0;
    let incorrectas = 0;

    for (let i = 1; i <= 4; i++) {
        let respuesta = document.getElementById('p' + i).value;
        if (respuesta === respuestasCorrectas[i-1]) {
            correctas++;
        } else {
            incorrectas++;
        }
    }

    alert('Respuestas correctas: ' + correctas + '\nRespuestas incorrectas: ' + incorrectas);
}

boton.addEventListener('click', calificar);
