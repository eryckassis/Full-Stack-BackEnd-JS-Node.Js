const pessoa = {
  nome: "Lucas",
  notas: [7, 8, 9],
  calcularMediaNotas: function () {
    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  },
};

function avaliarDesempenho(media) {
  const desempenho = {
    excelente: media >= 9,
    bom: media >= 7.5 && media < 9,
    regular: media >= 5 && media < 7.5,
    insuficiente: media < 6,
  };

  if (desempenho.excelente) return "Desempenho excelente!";
  if (desempenho.bom) return "Desempenho bom!";
  if (desempenho.regular) return "Desempenho regular!";
  return "Desempenho insuficiente!";
}
const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma media de notas de ${mediaCalculada}`);

const categoriaDesempenho = pessoa.avaliarDesempenho(mediaCalculada);
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);
//

const pessoa2 = {
  nome: "Ana",
  notas: [6, 7, 8],
  calcularMediaNotas: function () {
    const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  },
};
