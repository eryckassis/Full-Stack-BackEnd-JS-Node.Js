const alunos = ["João", "Maria", "José", "Ana", "Pedro"];
const notas = [7, 8, 6, 9, 5];

const lista = [alunos, notas];

function procurarAluno(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista;
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`A média do aluno ${aluno} é ${mediaAluno}.`);
  } else {
    console.log("Estudante não encontrado.");
  }
}

exibeENotas("Ana");
procurarAluno("Sandro");
