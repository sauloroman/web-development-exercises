document.body.innerHTML = "<h2>Problema 4 - Promedio de tres enteros</h2>"

function promedio(a, b, c) {
  return (a + b + c) / 3
}

const a = parseInt(prompt("Ingrese el primer número:"))
const b = parseInt(prompt("Ingrese el segundo número:"))
const c = parseInt(prompt("Ingrese el tercer número:"))

const prom = promedio(a, b, c)

document.body.innerHTML += `<p>El promedio es: <strong>${prom.toFixed(2)}</strong></p>`
