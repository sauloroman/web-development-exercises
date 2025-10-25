document.write("<h2>Problema 9.3</h2>")
const num1 = parseInt(prompt("1. Ingrese un numero: "))
const num2 = parseInt(prompt("2. Ingrese un numero: "))
const num3 = parseInt(prompt("3. Ingrese un numero: "))
if ( num1 < 10 && num2 < 10 && num3 < 10 ) {
    document.write("Todos los números son menores a diez")
} else {
    document.write("Los números no son menores a diez")
}