const FLAG = 9999
let sum = 0
let value

do {
    const value = parseInt(prompt(`Ingrese un valor (${FLAG} para terminar): `))
    if ( value === FLAG ) break
    sum += value
} while( value !== FLAG )

let result = ''
if ( sum === 0 ) {
    result = 'Igual a 0'
} else if ( sum > 0 ) {
    result = 'Mayor a 0'
} else {
    result = 'Menor a 0'
}

const div = document.createElement('DIV')
div.innerHTML = `
    <p>Acumulado: ${sum}</p>
    <p>${result}</p>
`
document.body.append(div)