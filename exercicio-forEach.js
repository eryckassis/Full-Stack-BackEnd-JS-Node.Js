const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, i) => {
  console.log(`Indice: ${i} e valor: ${numero}`);
});

//

function executaOperacaoEmArray(array, funcaoCallBack) {
  return array.forEach(funcaoCallback); // Executa a função callback para cada elemento do array
}

function dobraNumero(numero) {
  return numero * 2; // Dobra o número
}

const listaNumeros = [1, 2, 3, 4, 5]; // Lista de números
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero); // Executa a operação de dobrar os números
console.log(listaNumerosDobrados); // Exibe a lista de números dobrados
//

const number = [1, 2, 3, 4, 5]; // Array de números
const numeroProcurado = 30;
let posicao = -1; // Inicializa a posição como -1 (não encontrado)

for (let i = 0; i < number.length; i++) {
  if (number[i] === numeroProcurado) {
    posicao = i; // Atualiza a posição se o número for encontrado
    break; // Sai do loop se o número for encontrado
  }
}
console.log(`O número ${numeroProcurado} está na posição ${posicao}`); // Exibe a posição do número encontrado ou -1 se não encontrado
//

const nomesTurmaA = ["João", "Maria", "José", "Ana", "Pedro"]; // Array de nomes da turma A

const nomesTurmaB = ["Lucas", "Fernanda", "Carlos", "Mariana", "Rafael"]; // Array de nomes da turma B

const allClasses = [...nomesTurmaA, ...nomesTurmaB]; // Combina os dois arrays em um novo array

const wantedClass = allClasses.find((nome) => nome === "Ana"); // Encontra o nome "Ana" no array combinado
console.log(wantedClass); // Exibe o nome encontrado ou undefined se não encontrado

wantedClass
  ? console.log(`O nome ${wantedClass} foi encontrado na turma`)
  : console.log(`O nome ${wantedClass} não foi encontrado na turma`);
//

const numeroo = [6, 9, 12, 15, 18, 21];

numeros.forEach((num) => {
  const resultado = numeroo * 3;
  console.log(result);
});

const indiceDoNumero18 = numeroo.findIndex((num) => num === 18); // Encontra o índice do número 18 no array
