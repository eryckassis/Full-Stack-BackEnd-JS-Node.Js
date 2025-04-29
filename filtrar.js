// const alunos = [
//   "João",
//   "Maria",
//   "José",
//   "Ana",
//   "Pedro",
//   "Lucas",
//   "Mariana",
//   "Fernanda",
//   "Carlos",
//   "Roberto",
// ];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((aluno, indice) => {
//   return medias[indice] <= 7;
// });

// console.log(reprovados);
//

// const dinossauro = [
//   "Tiranossauro",
//   "Estegossauro",
//   "Triceratops",
//   "Velociraptor",
//   "Pterodáctilo",
// ];

// const nivelDePerigo = [10, 5, 7, 8, 2];

// const dinossaurosPerigosos = dinossauro.filter((_, indice) => {
//   return nivelDePerigo[indice] >= 7;
// });

// console.log(dinossaurosPerigosos); // ['Tiranossauro', 'Triceratops', 'Velociraptor']

const carrosRaros = ["ferrari", "lamborghini", "porsche", "bugatti", "mclaren"];

const maisRapidos = ["230", "250", "300", "350", "400"];

const carrosSuperRapidos = carrosRaros.filter((_, indice) => {
  return maisRapidos[indice] >= 300;
});

console.log(carrosSuperRapidos); // ['porsche', 'bugatti', 'mclaren']
