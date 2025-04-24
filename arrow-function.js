const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5)); // true
console.log(estudanteReprovou(8, 2)); // false
console, log(exibeNome("Fernando")); // "Fernando"

// => Arrow function é uma função anônima, ou seja, não tem nome
// oque funcao?
