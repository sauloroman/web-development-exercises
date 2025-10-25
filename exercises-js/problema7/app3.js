document.write('<h2>Problema 7.3</h2>')
const num = parseInt(prompt("Ingresa un numero: "))

if ( num <= 9 ) {
    document.write('<p>Un dígito</p>')
} else if ( num > 9 && num < 100 ) {
    document.write('<p>Dos dígitos</p>')
} else {
    document.write('<p>Más de dos dígitos</p>')
}