function cavalinhosDoido() {
  const cavalinhos = [
    { nome: "Cavalo 1", idade: 5 },
    { nome: "Cavalo 2", idade: 3 },
    { nome: "Cavalo 3", idade: 7 },
    { nome: "Cavalo 4", idade: 2 },
    { nome: "Cavalo 5", idade: 4 },
  ];

  for (let i = 0; i < cavalinhos.length; i++) {
    console.log(
      `Nome do cavalo: ${cavalinhos[i].nome}, Idade do cavalo: ${cavalinhos[i].idade}`
    );
  }
}

//

const marketList = ["banana", "maçã", "laranja", "uva", "manga"];

function printMarketList() {
  for (let i = 0; i < marketList.length; i++) {
    console.log(`Item ${i + 1}: ${marketList[i]}`);
  }
}

printMarketList(marketList);

//

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printNumbers() {
  let maior = 0;
  let menor = 0;

  for (let i = 0; i < number.length; i++) {
    if (number[i] > maior) {
      maior = number[i];
    }
    if (number[i] < menor) {
      menor = number[i];
    }
  }
  return `O maior número é ${maior} e o menor número é ${menor}`;
}

console.log(printNumbers(number));

//

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números pares:");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

//

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = sima / numeros.length;
console.log("numeros", numeros);
console.log("soma", soma);
