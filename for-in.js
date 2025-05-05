for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== "object" && tipo !== "function") {
    const texto = ` a chabe ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}
