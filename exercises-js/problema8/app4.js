document.write("<h2>Problema 8.4</h2>")

const postulante = prompt("Nombre del postulante: ")
const totalPreguntas = parseInt(prompt("Cantidad total de preguntas: "))
const totalCorrectas = parseInt(prompt("Cantidad total de preguntas correctas: "))
const porcentaje = totalCorrectas * 100 / totalPreguntas

let nivel = ''

if (porcentaje >= 90) {
    nivel = 'superior'
} else if (porcentaje >= 75 && porcentaje < 90) {
    nivel = 'medio'
} else if (porcentaje >= 50 && porcentaje < 75) {
    nivel = 'regular'
} else {
    nivel = 'fuera de nivel'
}

document.write("<p>Postulante:" + postulante + "</p>")
document.write("<p>Porcentaje:" + porcentaje + "</p>")
document.write("<p>Nivel:" + nivel + "</p>")