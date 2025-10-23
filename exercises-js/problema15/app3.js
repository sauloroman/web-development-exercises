let base = 5

const div = document.createElement('DIV')
for( let i = 1; i <= 10; i++ ) {
    div.innerHTML += `<p>${base} x ${i} = ${base * i}</p>`
}
document.body.append(div)
