const estudante = {
  nome: "Maria",
  idade: 32,
  cpf: "12345678900",
  turma: "Js",
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
  return objEstudante.infoEstudante; // undefined
}
console.log(estudante.pet);
console.log(estudante["pet"]);
console.log(estudante["nome"]);
console.log(estudante["cpf"]);

console.log(exibeInfoEstudante(estudante, "nome")); // Maria

const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

function exibeInfoPet(objPet, infoPet) {
  return objPet[infoPet];
  // return objPet.infoPet; // undefined
}
console.log(pet.nome);
console.log(`a cor do cachorro é ${pet.cor}`);
