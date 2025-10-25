document.write("<h2>Problema 5.4</h2>")
const precio = parseInt(prompt("Ingresar el precio del artículo: "))
const cantidad = parseInt(prompt("Ingresar la cantidad a llevar: "))
const total = precio * cantidad
document.write("<p>Precio a abonar: $" + total + "</p>")