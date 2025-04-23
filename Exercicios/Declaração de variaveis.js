const text = "Olá, mundo!";
const numero = 42;
const booleano = true;

console.log(typeof string); // Saída: Olá, mundo!
console.log(typeof numero); // Saída: 42
console.log(typeof booleano); // Saída: true

const primeiroNome = "Eryck";
const ultimoNome = "Assis";

// Usando operador +
const nomeCompletoConcatenado = primeiroNome + " " + ultimoNome;
console.log("Usando operador +: " + nomeCompleto); // Saída: Eryck Assis

// Usando template String
const nomeCompletoTemplate = "${primeiroNome} ${ultimoNome}";
console.log(`Usando template string; ${nomeCompletoTemplate}`);

const number = 42;
const string = "universo";

const texto = ` ${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto);

let minhavariavel = "Primeiro  Valor !";
console.log(minhavariavel); // Saída: Primeiro Valor !

minhavariavel = "Novo valor";
console.log(minhavariavel); // Saída: Novo valor

var fora = "fora";

if (true) {
  var dentro = "dentro";
  console.log(fora);
  console.log(dentro);
}

console.log(fora); // Saída: fora
console.log(dentro); // Saída: dentro

//////////////////////////////

let fora = "Fora";

if (true) {
  let dentro = "Dentro";
  console.log(fora); // Saída: Fora
  console.log(dentro); // Saída: Dentro
}

console.log(fora); // Saída: Fora
console.log(dentro); // ReferenceError: dentro is not defined

const olhaChuva = true;

if (estaChovendo) {
  console.log("Leve um guarda-chuva!");
} else {
  console.log("Não leve um guarda-chuva!");
}

// FIMM DO CÓDIGO
// O código acima demonstra a declaração de variáveis, o uso de operadores de concatenação,
