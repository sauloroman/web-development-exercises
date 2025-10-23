let accounts = []

let numberAccount, nameCustomer, currentBalance, statusAccount

do {
    numberAccount = parseInt(prompt("Ingrese el numero de cuenta (valor negativo para terminar): "))
    if ( numberAccount < 0 ) break

    nameCustomer = prompt("Ingrese nombre del cliente: ")
    
    currentBalance = parseFloat(prompt("Ingrese el saldo actual: "))
    if ( currentBalance > 0 ) {
        statusAccount = 'Acreedor'
    } else if ( currentBalance < 0 ) {
        statusAccount = 'Deudor'
    } else if ( currentBalance === 0 ) {
        statusAccount = 'Nulo'
    }

    const account = { numberAccount, nameCustomer, currentBalance, statusAccount }
    accounts.push(account)
} while( numberAccount > 0 )

const div = document.createElement('DIV')
let sumAcreedores = 0

accounts.forEach( acc => {
    const p = document.createElement('p')
    p.innerHTML = `
        <p>Numero de cuenta: ${acc.numberAccount}</p>
        <p>Nombre del cliente: ${acc.nameCustomer}</p>
        <p>Saldo actual: $${acc.currentBalance}</p>
        <p>Estado de la cuenta: ${acc.statusAccount}</p>
        <br />
    `
    if (acc.statusAccount === 'Acreedor') sumAcreedores += acc.currentBalance
    div.appendChild(p)
})

const p = document.createElement('p')
p.textContent = `Suma de acreedores: $${sumAcreedores}`
div.appendChild(p)

document.body.append(div)