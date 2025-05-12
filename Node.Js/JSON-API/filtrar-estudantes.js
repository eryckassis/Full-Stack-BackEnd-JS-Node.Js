const estudantes = require("./estudantes.json");

function filtraPropiedades(lista, propiedade) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propiedade);
  });
}

const listaEnderecos = filtraPropiedades(estudantes, "cep");
console.log(listaEnderecos);
