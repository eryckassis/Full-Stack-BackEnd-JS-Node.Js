const estudante = {
  nome: "Maria",
  idade: 32,
  cpf: "12345678900",
  turma: "Js",
};

console.log(estudante.nome); // Maria
console.log(`o nome de estudante é ${estudante.nome}`); // o nome de estudante é Maria
console.log(
  `os tres primeiros numeros do cpf sao ${estudante.cpf.substring(0, 3)}`
); // os tres primeiros numeros do cpf sao 123
