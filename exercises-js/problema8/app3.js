document.write("<h2>Problema 8.3</h2>")
const num = parseInt(prompt("Ingrese numero de hasta 3 cifras: "))
if ( num <= 9 ) {
    document.write("<p>El número tiene un dígito</p>")
} else if ( num > 9 && num <= 99 ) {
    document.write("<p>El número tiene dos dígitos</p>")
} else {
    document.write("<p>El número tiene tres dígitos</p>")
}