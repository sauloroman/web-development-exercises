document.write('<h3>Problema 7.1</h3>')
const num1 = parseFloat(prompt("Numero 1: "))
const num2 = parseFloat(prompt("Numero 2: "))

if ( num1 > num2 ) {
    const suma = num1 + num2
    const difference = num1 - num2
    document.write("<p>Suma: " + suma + "</p>")
    document.write("<p>Diferencia: " + difference + "</p>")
} else {
    const product = num1 * num2
    const divide = num1 / num2
    document.write("<p>Producto: " + product + "</p>")
    document.write("<p>Division: " + divide + "</p>")
}