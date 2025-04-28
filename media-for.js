// const notas = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1];

// let somaDasNotas = 0;

// for (let indice = 0; indice < notas.length; indice++) {
//   somaDasNotas += notas[indice];
// }

// const media = somaDasNotas / notas.length;
// console.log(`A média das notas é: ${media}`);

// ctrl k  + ctrl c para comentar
// ctrl k  + ctrl u para descomentar

const notes = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1];
const notes2 = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1];
const notes3 = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1];

const allNotes = [notes, notes2, notes3];

let sumOfNotes = 0;

for (let i = 0; i < allNotes.length; i++) {
  for (let j = 0; j < allNotes[i].length; j++) {
    sumOfNotes += allNotes[i][j];
  }
}

media = media / allNotes.length;

console.log(media);
console.log(`A média das notas é: ${media}`);
