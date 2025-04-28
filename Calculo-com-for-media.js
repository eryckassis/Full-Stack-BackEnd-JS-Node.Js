const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media);

// O código começa com um array de números chamado numeros.

// Em seguida, um loop for é usado para percorrer o array e calcular a soma de todos os números presentes nele.

// Após calcular a soma, é determinada a média dividindo essa soma pelo número total de elementos no array numeros.

// Por fim, exibe a média calculada no console.
