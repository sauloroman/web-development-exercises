document.body.innerHTML = "<h2>Problema 2 - Perímetro de un cuadrado</h2>"

function perimetroCuadrado(lado) {
  return lado * 4
}

const lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"))
const perimetro = perimetroCuadrado(lado)

document.body.innerHTML += `<p>El perímetro del cuadrado es: <strong>${perimetro}</strong></p>`
