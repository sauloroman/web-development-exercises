class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.esMayorDeEdad = edad >= 18; 
    }
}

let personas = [];

for (let i = 0; i < 4; i++) {
    let nombre = prompt('Ingrese nombre de la persona ' + (i + 1) + ':');
    let edad = parseInt(prompt('Ingrese edad de la persona ' + (i + 1) + ':'));
    personas.push(new Persona(nombre, edad));
}

let edadMayor = personas[0].edad;
for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > edadMayor) {
        edadMayor = personas[i].edad;
    }
}

document.write('<h3>Persona(s) de mayor edad (' + edadMayor + ' años):</h3>');

let contador = 0;
for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad == edadMayor) {
        document.write(personas[i].nombre + '<br>');
        contador++;
    }
}

if (contador > 1) {
    document.write('<br>Hay ' + contador + ' personas con la edad mayor');
}

// Mostrar quiénes son mayores de edad
document.write('<h3>Personas mayores de edad (18+):</h3>');
for (let i = 0; i < personas.length; i++) {
    if (personas[i].esMayorDeEdad) {
        document.write(personas[i].nombre + ' (' + personas[i].edad + ' años)<br>');
    }
}