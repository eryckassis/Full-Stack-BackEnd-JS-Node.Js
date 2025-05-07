// Definindo o objeto carro com as propriedades iniciais
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata",
  ligado: true, // Propriedade para indicar se o carro está ligado ou desligado

  // Método para ligar o carro
  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O carro está ligado.");
    } else {
      console.log("O carro já está ligado.");
    }
  },

  // Método para desligar o carro
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log("O carro está desligado.");
    } else {
      console.log("O carro já está desligado.");
    }
  },

  // Método para obter detalhes do carro
  obterDetalhes: function () {
    const estado = this.ligado ? "ligado" : "desligado";
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  },
};

// Testando os métodos
carro.ligar(); // Tentar ligar o carro quando já está ligado
carro.desligar(); // Desligar o carro
carro.desligar(); // Tentar desligar o carro quando já está desligado
carro.ligar(); // Ligar o carro
console.log(carro.obterDetalhes()); // Obter detalhes do carro e imprimir no console
