const QUANTITY_INTEGER = 5
let counterEven = 0
let counterOdd = 0

for ( let i = 0; i < QUANTITY_INTEGER; i++ ) {
    const integer = parseInt(prompt(`${i + 1}. Ingrese un valor: `))
    if ( integer % 2 === 0 ) {
        counterEven++
    } else {
        counterOdd++
    }
}

const div = document.createElement('DIV')
div.innerHTML = `
    <p>Cantidad de pares: ${counterEven}</p>
    <p>Cantidad de impares: ${counterOdd}</p>
`
document.body.append(div)