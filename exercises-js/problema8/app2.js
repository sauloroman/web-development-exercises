document.write("<h2>Problema 8.2</h2>")
const numx = parseInt(prompt("Ingrese un numero: "))
if ( numx === 0 ) {
    document.write("<p>El número es cero</p>")
} else if ( numx > 0 ) {
    document.write("<p>El número es positivo</p>")
} else {
    document.write("<p>El número es negativo</p>")
}