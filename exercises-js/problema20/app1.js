document.body.innerHTML = "<h2>Problema 1 - Cuatrimestre actual</h2>"

const fecha = new Date()
const mes = fecha.getMonth() + 1

let cuatrimestre

if (mes >= 1 && mes <= 4) {
  cuatrimestre = "Primer cuatrimestre (Enero - Abril)"
} else if (mes >= 5 && mes <= 8) {
  cuatrimestre = "Segundo cuatrimestre (Mayo - Agosto)"
} else {
  cuatrimestre = "Tercer cuatrimestre (Septiembre - Diciembre)"
}

document.body.innerHTML += `
  <p>Mes actual: <strong>${mes}</strong></p>
  <p>Nos encontramos en el <strong>${cuatrimestre}</strong>.</p>
`
