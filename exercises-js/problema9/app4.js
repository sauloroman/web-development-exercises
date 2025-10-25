document.write("<h2>Problema 9.4</h2>")
const x = parseInt(prompt("X: "))
const y = parseInt(prompt("Y: "))
if ( x > 0 && y > 0 ) {
    document.write("Primer cuadrante")
} else if ( x < 0 && y > 0 ) {
    document.write("Segundo cuadrante")
} else if ( x < 0 && y < 0 ) {
    document.write("Tercer cuadrante")
} else {
    document.write("Cuarto cuadrante")
}