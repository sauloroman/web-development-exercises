const menor = parseInt(prompt('Valor menor: '))
const mayor = parseInt(prompt('Valor mayor: '))

const contenedor = document.createElement('DIV')
for ( let i = menor; i <= mayor; i++ ) {
    const span = document.createElement('SPAN')
    span.textContent = `${i} `
    contenedor.append(span)
}
document.body.append(contenedor)

