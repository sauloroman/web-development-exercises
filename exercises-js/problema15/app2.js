const QUANTITY_NUMBERS = 10
let sumLastFiveNumbers = 0

for ( let i = 1; i <= QUANTITY_NUMBERS; i++ ) {
    const num = parseFloat(prompt("Ingrese un numero: "))
    if ( i >= 5 ) {
        sumLastFiveNumbers += num
    }
}

const div = document.createElement('DIV')
div.innerHTML = `
    <p>Suma de los ultimos 5 valores ingresados: ${sumLastFiveNumbers}</p>
`
document.body.append(div) 