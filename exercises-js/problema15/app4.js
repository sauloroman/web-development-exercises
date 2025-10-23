const base = parseInt(prompt("Ingresar un valor del 1 al 10: "))

const div = document.createElement('DIV')
for(let i = 1; i <= 12; i++){
    const p = document.createElement('P')
    p.innerHTML = `
        <p>${base} x ${i} = ${base * i}</p>
    `
    div.append(p)
}
document.body.append(div)
