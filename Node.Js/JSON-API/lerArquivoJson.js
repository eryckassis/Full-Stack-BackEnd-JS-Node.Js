const dados = require("./dados.json");
const chaves = Object.keys(dados);
console.log(typeof dados);
console.log(dados);

const produto = {
  id: 1,
  nome: "Camiseta",
  preco: 25.99,
};

const stringDados = JSON.stringify(dados);
const stringProduto = JSON.stringify(produto);
console.log(stringProduto);
