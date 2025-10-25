const titulo = document.createElement('h2');
titulo.textContent = "Verificación de Email";
document.body.appendChild(titulo);

const info = document.createElement('p');
const resultadoDOM = document.createElement('p');
document.body.appendChild(info);
document.body.appendChild(resultadoDOM);

function verificarArroba(email) {
    if (email.indexOf('@') !== -1) {
        return 'El email es válido (contiene @)';
    } else {
        return 'El email NO es válido (no contiene @)';
    }
}

let email = prompt('Ingrese su dirección de email:').trim();

info.textContent = 'Email ingresado: ' + email;
resultadoDOM.textContent = 'Resultado: ' + verificarArroba(email);
