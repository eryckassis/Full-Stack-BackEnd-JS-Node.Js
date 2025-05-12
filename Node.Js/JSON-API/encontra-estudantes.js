const estudantes = require("./estudantes.json");

function encontraInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEcontrado = encontraInformacao(estudantes, "nome", "Juliet");
console.log(estudanteEcontrado);
const telefoneEstudante = encontraInformacao(
  estudantes,
  "telefone",
  "123456789"
);
console.log(telefoneEstudante);
