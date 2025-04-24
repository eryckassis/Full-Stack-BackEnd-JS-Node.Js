const notaFinal = 6;
const faltas = 2;
const advertencia = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log("reprovado, boas festas");
} else {
  console.log("nao foi aprovado por falta");
}

if (faltas >= 2 && !advertencia) {
  console.log("recebeu bonus");
} else {
  console.log("nao recebeu bonus");
}
