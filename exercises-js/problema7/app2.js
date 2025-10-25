document.write('<h2>Problema 7.2</h2>')
const nota1 = parseFloat(prompt("Nota 1: "))
const nota2 = parseFloat(prompt("Nota 2: "))
const nota3 = parseFloat(prompt("Nota 3: "))
const promedio = (nota1 + nota2 + nota3) / 3

if ( promedio >= 4 ) {
    document.write("<p>Regular: " + promedio + "</p>")
} else {
    document.write("<p>Reprobado</p>")
}