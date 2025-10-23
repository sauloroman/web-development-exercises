document.body.innerHTML += "<h2>Problema 2 - Fecha actual con formato</h2>"

function obtenerFechaActual() {
  const fecha = new Date()

  const diasSemana = [
    "Domingo", "Lunes", "Martes", "Miércoles",
    "Jueves", "Viernes", "Sábado"
  ]
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  const diaSemana = diasSemana[fecha.getDay()]
  const dia = fecha.getDate()
  const mes = meses[fecha.getMonth()]
  const anio = fecha.getFullYear()

  return `Hoy es ${diaSemana} ${dia} de ${mes} de ${anio}`
}

const mensaje = obtenerFechaActual()
document.body.innerHTML += `<p>${mensaje}</p>`
