const sumList = function( arr )  {
    return arr.reduce( (acc, value) => acc + value, 0)
}

const askForValues = function( listNumber = 1 ) {
    let numbers = []
    for ( let i = 0; i < 3; i++ ) {
        const value = parseInt( prompt(`Lista ${listNumber} - ${i + 1}. Ingrese un valor: `))
        numbers.push( value )
    }
    return numbers
}

const accList1 = sumList(askForValues(1))
const accList2 = sumList(askForValues(2))
let result = ''

console.log({accList1})
console.log({accList2})

if ( accList1 > accList2 ) {
    result = `Lista 1 mayor`
} else if ( accList2 > accList1 ) {
    result = `Lista 2 mayor`
} else {
    result = 'Listas iguales'
}

const div = document.createElement('div')
div.innerHTML = `
    <p>Valor acumulado de lista 1: ${accList1}</p>
    <p>Valor acumulado de lista 2: ${accList2}</p>
    <p>Resultado: ${result}</p>
`
document.body.append(div)
