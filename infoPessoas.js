// exercicios

const pessoas = {
  nome: "Lucas",
  idade: 25,
  solteiro: true ? true : false,
  profissao: ["Desenvolvedor", "Designer"],
};

function mostrarInfoPessoas(pessoa) {
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Solteiro: ${pessoa.solteiro}`);
  console.log(`Profissão: ${pessoa.profissao.join(", ")}`);
}
mostrarInfoPessoas(pessoas);
//

const listaPessoas = [
  {
    nome: "Lucas",
    idade: 25,
    solteiro: true,
    profissao: ["Desenvolvedor", "Designer"],
  },
  {
    nome: "Maria",
    idade: 30,
    solteiro: false,
    profissao: ["Gerente", "Analista"],
  },
  {
    nome: "João",
    idade: 28,
    solteiro: true,
    profissao: ["Analista", "Programador"],
  },
];

function mostrarInfoPessoas(pessoa) {
  console.log("Lista de Pessoas:");
  pessoas.forEach((pessoa) => {
    console.log(`Nome: ${pessoa.nome}`);
  });
}

function filtrarPorCidade(pessoas, cidade) {
  return pessoas.filter((pessoa) => pessoa.cidade === cidade);
}

// chamada da função mostraListaPessoas
mostrarInfoPessoas(listaPessoas);

// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, "Salvador");
console.log("Pessoas de Salvador:");
console.log(pessoasSalvador);
//

const calculator = {
  soma: function (a, b) {
    return a + b;
  },
  subtracao: function (a, b) {
    return a - b;
  },
  multiplier: function (a, b) {
    return a * b;
  },
  divisao: function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Divisão por zero não é permitida.";
    }
  },

  calcularMedia: function (numbers) {
    const soma = numeros.reduce((total, numeros) => total + numeros, 0);
    return soma / numeros.length;
  },
};

// chamada das funções

console.log(calculator.soma(5, 3)); // 8
console.log(calculator.subtracao(10, 4)); // 6
console.log(calculator.multiplier(2, 3)); // 6
console.log(calculator.divisao(10, 2)); // 5
console.log(calculator.divisao(10, 0)); // "Divisão por zero não é permitida."

const numerosParaMedia = [10, 20, 30, 40, 50];
console.log(calculator.calcularMedia(numerosParaMedia)); // 30
//

const bankAccount = {
  titular: "Baiano",
  saldo: 1000,
  depositar: function (valor) {
    this.saldo += valor;
    console.log(
      `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`
    );
  },
};

const cliente = {
  nome: "Zilma",
  account: bankAccount,
};

function mostrarSaldo(cliente) {
  console.log(`Titular: ${cliente.account.titular}`);
  console.log(`Saldo: R$${cliente.account.saldo}`);
}

// realize operacoes de depositos e saques na conta bancaria
cliente.account.depositar(500);
cliente.conta.sacar(200);
