document.write("<h2>Problema 9.5</h2>")
let sueldo = parseFloat(prompt("Ingresa salario: "))
const antiguedad = parseInt(prompt("Ingrese años: "))

if ( sueldo < 500 && antiguedad >= 10 ) {
    sueldo *= 1.2
} else if ( sueldo < 500 && antiguedad < 10 ) {
    sueldo *= 1.05
} else if ( sueldo >= 500 ) {
    sueldo *= 1.00 
}
document.write("Sueldo: $" + sueldo )