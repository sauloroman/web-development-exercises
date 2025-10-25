const titulo = document.createElement('h2');
titulo.textContent = "Separador de palabras";
document.body.appendChild(titulo);

let oracion = prompt('Ingrese una oración:').trim();

let palabras = oracion.split(' ');

const oracionTitulo = document.createElement('h3');
oracionTitulo.textContent = "Oración ingresada:";
document.body.appendChild(oracionTitulo);

const oracionTexto = document.createElement('p');
oracionTexto.textContent = oracion;
document.body.appendChild(oracionTexto);

const palabrasTitulo = document.createElement('h3');
palabrasTitulo.textContent = "Palabras separadas:";
document.body.appendChild(palabrasTitulo);

const lista = document.createElement('ul');
document.body.appendChild(lista);

for (let i = 0; i < palabras.length; i++) {
    const item = document.createElement('li');
    item.textContent = palabras[i];
    lista.appendChild(item);
}
