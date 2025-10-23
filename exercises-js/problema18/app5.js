document.body.innerHTML = "<h2>Problema 5 - Suma de 5 valores</h2>"

function sumar5Valores() {
  let suma = 0
  for (let i = 1; i <= 5; i++) {
    const valor = parseFloat(prompt(`Ingrese el valor ${i}:`))
    suma += valor
  }
  return suma
}

const total = sumar5Valores()
document.body.innerHTML += `<p>La suma total de los 5 valores es: <strong>${total}</strong></p>`
