const QUANTITY_STUDENTS = 10
let counterGreaterOrEqualThan7 = 0
let counterLessOrEqualThan7 = 0

for( let i = 0; i < QUANTITY_STUDENTS; i++ ) {
    const score = parseFloat(prompt(`${i + 1}. Ingrese la nota: `)) 
    if ( score >= 7 ) {
        counterGreaterOrEqualThan7++
    } else {
        counterLessOrEqualThan7++
    }
}

const div = document.createElement('div')

div.innerHTML = `
    <p>Notas mayores o iguales que 7: ${counterGreaterOrEqualThan7}</p>
    <p>Notas menores o iguales que 7: ${counterLessOrEqualThan7}</p>
`

document.body.append(div)