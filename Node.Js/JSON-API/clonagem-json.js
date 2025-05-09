const objetoOriginal = {
  chave: "valor",
};
const copiaReferencia = objetoOriginal;

copiaReferencia.chave = "novo valor";
console.log(objetoOriginal.chave); // Saída: "novo valor"

const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = "Novo Valor";
console.log(objetoOriginal.chave); // Saída: "novo valor"
