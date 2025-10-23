const num1 = parseInt(prompt('Valor 1: '))
const num2 = parseInt(prompt('Valor 2: '))
const num3 = parseInt(prompt('Valor 3: '))

const ordenarNumeros = ( ...nums ) => {
    const limiteInferior = 0
    const limiteSuperior = nums.length - 1
    
    for (let i = limiteInferior; i < limiteSuperior; i++) {
            for (let j = limiteInferior; j < limiteSuperior - i; j++) {
                if (nums[j] > nums[j + 1]) {
                    const temp = nums[j]
                    nums[j] = nums[j + 1]
                    nums[j + 1] = temp
            }
        }
    }

    return nums
}

const numerosOrdenados = ordenarNumeros(num1, num2, num3)

document.body.innerHTML = `<h1>Ordenados de menor a mayor</h1>`

const contenedor = document.createElement('div')

numerosOrdenados.forEach( num => {
    const p = document.createElement('p')
    p.textContent = `${num} `
    contenedor.append(p)
})

document.body.append(contenedor)