const QUANTITY_PEOPLE = 5
let sum = 0

for( let i = 0; i < QUANTITY_PEOPLE; i++ ) {
    const height = parseFloat(prompt(`${i + 1}. Ingrese su altura (cm): `))
    sum += height
}

const averageHeight = sum / QUANTITY_PEOPLE

const p = document.createElement('P')

p.textContent = `Altura promedio: ${averageHeight}cm`

document.body.append(p)