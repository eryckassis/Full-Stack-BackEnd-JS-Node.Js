let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log("Saldo:", saldo);
console.log("Saldo após saque:", operacao);
// Saldo : 1000
// Saldo após saque: 950

//

const numero = 10;
const resultado = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado); // Par
// O resultado é Par, pois 10 é um número par.

const logado = true;
const admin = false;

const resultadoAdmin = logado && admin;

console.log("Administrador logado no sistema:", resultadoAdmin); // false
// O resultado é false, pois o usuário não é um administrador logado no sistema.

const condicao1 = true;
const condicao2 = false;

const resultadoCondicao = condicao1 || condicao2;
console.log("Resultado:", resultadoCondicao); // true

const idadeMinima = 18;
const idadeUsuario = 20;

if (idadeUsuario >= idadeMinima) {
  console.log("Usuário pode acessar o conteúdo restrito.");
} else {
  console.log("Usuário não pode acessar o conteúdo restrito.");
}
