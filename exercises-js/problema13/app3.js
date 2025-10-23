const QUANTITY_PEOPLE_IN_HOSPITAL = 5
let sumSalaries = 0
let counterSalariesBetween100And300 = 0
let counterSalariesGreaterThan300 = 0

for( let i = 0; i < QUANTITY_PEOPLE_IN_HOSPITAL; i++ ) {
    const salary = parseFloat(prompt(`${i + 1}. Ingrese su salario: `))
    
    if ( salary >= 100 && salary <= 300 ) {
        counterSalariesBetween100And300++
    } else if ( salary > 300 ) {
        counterSalariesGreaterThan300++
    }

    sumSalaries += salary
}

const div = document.createElement('DIV')

div.innerHTML = `
    <p>Salarios entre 100 y 300: ${counterSalariesBetween100And300}</p>
    <p>Salarios mayores a 300: ${counterSalariesGreaterThan300}</p>
    <p>Gastos en salario al personal: ${sumSalaries}</p>
`

document.body.append(div)