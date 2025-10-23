const QUANTITY_TRIANGLES = 3
let triangles = []

for ( let i = 0; i < QUANTITY_TRIANGLES; i++ ) {
    const base = parseFloat(prompt("Ingrese la base: "))
    const height = parseFloat(prompt("Ingrese la height: "))
    const area = (base * height) / 2 
    const triangle = { base, height, area }
    triangles.push( triangle )
}

let counterAreaGreaterThan12 = 0
const div = document.createElement('DIV')
triangles.forEach( tri => {
    const divTriangle = document.createElement('DIV')
    divTriangle.innerHTML = `
        <p>Base: ${tri.base}</p>
        <p>Altura: ${tri.height}</p>
        <p>Área: ${tri.area}</p>
        <br />
    `
    if ( tri.area > 12 ) {
        counterAreaGreaterThan12++
    }
    div.append(divTriangle)
})
const p = document.createElement('p')
p.innerHTML = `Cantidad de triangulos con superficie mayor a 12: ${counterAreaGreaterThan12}` 

document.body.append(div)
document.body.append(p)