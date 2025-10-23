const num1 = parseInt(prompt('Valor 1: '))
const num2 = parseInt(prompt('Valor 2: '))
const num3 = parseInt(prompt('Valor 3: '))

const obtenerMayorMenor = ( ...nums ) => {
    const mayor = nums.reduce( (valores, curr) => {
        if ( curr > valores.max ) valores.max = curr
        if ( curr < valores.men ) valores.men = curr
        return valores
    }, { max: nums[0], men: nums[0] })
    return mayor
}

const { max, men } = obtenerMayorMenor(num1, num2, num3) 

const contenedor = document.createElement('DIV')
contenedor.innerHTML = `
    <p>Mayor: ${max}</p>
    <p>Mayor: ${men}</p>
`
document.body.append(contenedor)