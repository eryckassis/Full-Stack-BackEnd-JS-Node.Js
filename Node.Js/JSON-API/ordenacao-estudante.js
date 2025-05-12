const estudantes = require("./estudantes.json");

function ordena(lista, propriedade) {
  return lista.sort((a, b) =>
    a[propriedade] === b[propriedade]
      ? 0
      : a[propriedade] < b[propriedade]
      ? -1
      : 1
  );
}

const listaOrdenada = ordena(estudantes, "nome");
console.log(listaOrdenada);

// o codigo acima é uma melhora mais clean de como usar a funcao Ordena

// Principais Melhorias
// Legibilidade:

// O uso do operador ternário reduz a repetição de código e mantém a lógica em uma única expressão.
// Clareza:

// Elimina o uso explícito de blocos if para simplificar a leitura.
// Manutenção:

// Fácil de entender e ajustar, caso novas condições sejam adicionadas.

// Agora uma forma inversa de ordenar a lista de forma Inversa.

const estudantes = require("./estudantes.json");

function ordena(lista, propriedade, ordem = "asc") {
  return lista.sort((a, b) => {
    const comparacao =
      a[propriedade] < b[propriedade]
        ? -1
        : a[propriedade] > b[propriedade]
        ? 1
        : 0;
    return ordem === "asc" ? comparacao : -comparacao;
  });
}

const listaOrdenadaAsc = ordena(estudantes, "nome"); // Ordem ascendente
console.log("Ordem ascendente:", listaOrdenadaAsc);

const listaOrdenadaDesc = ordena(estudantes, "nome", "desc"); // Ordem descendente (inversa)
console.log("Ordem descendente:", listaOrdenadaDesc);
