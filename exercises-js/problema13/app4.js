let number = 0
let strDoc = ''

for ( let i = 0; i < 20; i++ ) {
    number += 5
    strDoc += `${number} `
}

const p = document.createElement('p')
p.textContent = strDoc
document.body.append(p)