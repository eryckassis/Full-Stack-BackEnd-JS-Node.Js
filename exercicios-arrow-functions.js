function cumprimentarPessoa(nome) {
  return `Olá, ${nome}! Como Voce está?`;
}

const nomeDaPessoa = "Fernando";
const saudacao = cumprimentarPessoa(nomeDaPessoa);

console.log(saudacao); // "Olá, Fernando! Como Voce está?"

//

function verificaIdade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade!";
  } else {
    return "Você é menor de idade!";
  }
}
console.log(verificaMaioridade(17)); // "Você é menor de idade!"
console.log(verificaMaioridade(20)); // "Você é maior de idade!"

//

function verificaPalindromo(string) {
  const stringInvertida = string.split("").reverse().join("");
  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("banana")); // false

//

function encontrarMaiorNumero(num1, num3, num4) {
  let maior = num1;
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }
  return maior;
}

console.log(encontrarMaiorNumero(10, 20, 15)); // 20

//

const calcularPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calcularPotencia(base, expoente);
console.log(` o resultado de ${base} elevado a ${expoente} é: ${resultado}`);
// 8
