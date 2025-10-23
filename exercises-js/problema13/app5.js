let num = 10
let strBody = ''

while ( num <= 1500 ) {
    strBody += `${num} - `
    num +=10
}

const p = document.createElement('p')
p.textContent = strBody
document.body.append(p)