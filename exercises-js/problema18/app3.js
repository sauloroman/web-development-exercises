document.body.innerHTML = "<h2>Problema 3 - Cantidad de dígitos</h2>"

function contarDigitos(num) {
  return num.toString().length
}

const numero = parseInt(prompt("Ingrese un número entero positivo (hasta 5 dígitos):"))
const cantidad = contarDigitos(numero)

document.body.innerHTML += `<p>El número tiene <strong>${cantidad}</strong> dígito(s).</p>`
