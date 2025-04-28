function concatArrays(arr1, arr2) {
  // Concatenar os dois arrays
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultado = concatArrays(array1, array2);
console.log(resultado); // [1, 2, 3, 4, 5, 6]

//

const numeros = [1, 2, 3, 4, 5];
const parteNumeros = numeros.slice(1, 4); // [2, 3, 4]
console.log(parteNumeros); // [2, 3, 4]

// O método slice() retorna uma cópia rasa de uma parte do array dentro de um novo array

//

const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];
frutas.splice(2, 1, "Manga", "Pera"); // Remove "Laranja" e adiciona "Manga" e "Pera"
console.log(frutas);
// ["Maçã", "Banana", "Manga", "Pera", "Limão", "Abacaxi"]

//

const menuPrincipal = [" Pizza", "Hamburguer", "Sushi"];
const menuDeSobremesas = ["Pudim", "Bolo", "Sorvete"];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto); // ['Pizza', 'Hamburguer', 'Sushi', 'Pudim', 'Bolo', 'Sorvete']
// O método concat() é usado para unir dois ou mais arrays. Ele retorna um novo array sem alterar os arrays existentes.

//

let matriz = [];
let valorInicical = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicical);
    valorInicical++;
  }
  matriz.push(linha);
}

console.log("Elemento na segunda linha e terceira coluna:", matriz);
// Saída: Elemento na segunda linha e terceira coluna: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

matriz[1][2] = 10;
console.log("Matriz após a adição do elemento:", matriz);
