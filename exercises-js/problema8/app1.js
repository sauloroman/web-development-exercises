document.write("<h2>Problema 8.1</h2>")
const num1 = parseInt(prompt("Numero 1: "))
const num2 = parseInt(prompt("Numero 2: "))
const num3 = parseInt(prompt("Numero 3: "))
let max = num1
if ( num2 > max ) max = num2
if ( num3 > max ) max = num3
document.write("<p>Mayor: " + max + " </p>")