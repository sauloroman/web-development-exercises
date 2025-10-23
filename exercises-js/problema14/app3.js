const FLAG = 0
let counterMen = 0
let counterWomen = 0
let counterMenBetween16And65YearsOld = 0
let documentNum, age, gender

do {
    documentNum = parseInt(prompt('Ingrese numero de documento (0 para finalizar): '))
    if ( documentNum === FLAG ) break;
    age = parseInt(prompt('Ingrese edad: '))
    gender = prompt('Ingrese sexo (femenino, masculino): ')

    if ( gender === 'femenino' ) {
        counterWomen++
    } else if ( gender === 'masculino' ) {
        counterMen++
    } 
    
    if ( age >= 16 && age <= 65 ) {
        counterMenBetween16And65YearsOld++
    }
} while( documentNum !== FLAG )

const div = document.createElement('DIV')
div.innerHTML = `
    <p>Cantidad de total de personas censadas: ${counterMen + counterWomen}</p>
    <p>Cantidad de varones: ${counterMen}</p>
    <p>Cantidad de mujeres: ${counterWomen}</p>
    <p>Cantidad de varones cuya edad varia entre 16 y 65 años: ${counterMenBetween16And65YearsOld}</p>
`
document.body.append(div)