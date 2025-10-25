document.write("<h2>Problema 9.2</h2>")
const valor1 = parseInt(prompt("Valor 1: "))
const valor2 = parseInt(prompt("Valor 2: "))
const valor3 = parseInt(prompt("Valor 3: "))
let resultado = 0
if (  valor1 === valor2 && valor1 == valor3  ) {
    resultado = (valor1 + valor2) * valor3
}
document.write("<p>Resultado: " + resultado + " </p>")