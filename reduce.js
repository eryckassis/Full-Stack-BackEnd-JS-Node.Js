// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(listaDeNotas) {
//   const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
//     return acumulador + nota;
//   }, 0);

//   const medua = somaDasNotas / listaDeNotas.length;
//   return medua;
// }

// console.log(calculaMedia(salaJS));
// console.log(calculaMedia(salaJava));
// console.log(calculaMedia(salaPython));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = numeros.reduce((acumulador, numero) => numero + acumulador, 0);

console.log(soma); // 55
