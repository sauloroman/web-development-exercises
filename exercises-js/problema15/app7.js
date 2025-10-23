document.body.innerHTML = "<h2>Ejercicio 7 - Valores enteros</h2>";

let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;

for (let i = 1; i <= 10; i++) {
  const num = parseInt(prompt(`Ingrese el valor ${i}:`));

  if (num < 0) negativos++;
  if (num > 0) positivos++;
  if (num % 15 === 0) multiplos15++;
  if (num % 2 === 0) sumaPares += num;
}

const salida = document.createElement("div");
salida.innerHTML = `
  <p>Valores negativos: ${negativos}</p>
  <p>Valores positivos: ${positivos}</p>
  <p>Múltiplos de 15: ${multiplos15}</p>
  <p>Suma de números pares: ${sumaPares}</p>
`;

document.body.appendChild(salida);
