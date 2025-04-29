function concatArrays(arr1, arr2) {
  return [].concat(arr1, arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const resultado = concatArrays(arr1, arr2);
const arraysJuntos = concatArrays(arr1, arr2, arr3);
console.log(arraysJuntos); // [1, 2, 3, 4, 5, 6]

//

const valores = [1, 2, 3, 4, 5];
const soma = valores.reduce((acumulador, valorAtual) => numero + acumulador, 0);
console.log(soma); // 15

//

const coresLista1 = ["vermelho", "verde", "azul"];
const coresLista2 = ["amarelo", "laranja", "roxo"];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log(coresUnicas); // ["vermelho", "verde", "azul", "amarelo", "laranja", "roxo"]
//
