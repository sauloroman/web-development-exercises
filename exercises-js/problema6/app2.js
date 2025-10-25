document.write("<h2>Problema 6.2</h2>")
const clave1 = parseFloat(prompt("Clave 1: "))
const clave2 = parseFloat(prompt("Clave 2: "))
const areEqual = clave1 === clave2
document.write("<p>Son iguales: " + (areEqual ? "Sí" : "No") + " </p>")