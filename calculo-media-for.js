const notas = [7, 8, 6, 9, 5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++);
{
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`A média é ${media}`);
// Saída: A média é 7.0

// O loop for percorre o array notas e soma cada nota à variável somaDasNotas. Depois, a média é calculada dividindo a soma pelo número total de notas. O resultado é exibido no console.
