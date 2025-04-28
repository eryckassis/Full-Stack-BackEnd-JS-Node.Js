const notas = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

console.log(`mediaDasNotas e ${mediaDasNotas}`);

//

notas.forEach(somaNotas);
function comaNotas(nota) {
  somaDasNotas += nota;
}

const mediaDasNotas = somaDasNotas / notas.length;
console.log(`somaDasNotas e ${somaDasNotas}`);
