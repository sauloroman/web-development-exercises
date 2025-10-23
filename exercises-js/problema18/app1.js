document.body.innerHTML = "<h2>Problema 1 - Mayor de tres números</h2>"

function mayorDeTres(a, b, c) {
  if (a >= b && a >= c) return a
  else if (b >= a && b >= c) return b
  else return c
}

const n1 = parseInt(prompt("Ingrese el primer número:"))
const n2 = parseInt(prompt("Ingrese el segundo número:"))
const n3 = parseInt(prompt("Ingrese el tercer número:"))

const mayor = mayorDeTres(n1, n2, n3)
document.body.innerHTML += `<p>El mayor de los tres es: <strong>${mayor}</strong></p>`
