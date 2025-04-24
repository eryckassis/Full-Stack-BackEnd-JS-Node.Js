const frase = "Embora seja fato, de fato é!";
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Converte para maiúsculas

const valorNull = null; // Valor nulo
let valorundefined; // Valor indefinido

console.log("valor null:", valorNull); // null
console.log("valor undefined:", valorundefined); // undefined

const numero = 10;
const text = "Macaco";
const booleano = true;

const combinacao = `${numero} ${texto} é verdade? ${booleano}`; // Template string
console.log(combinacao); // 10 Macaco é verdade? true

const number = 22;
const texto = "22";

const numeroConvertido = String(number); // Converte número para string
const textoConvertido = Number(text); // Converte string para número

console.log("Tipo de dado apos conversão:", typeof numeroConvertido); // string
console.log("Tipo de dado apos conversão:", typeof textoConvertido); // number

const newText = "Eu amo JavaScript!";

const maiusculas = newText.toUpperCase(); // Converte para maiúsculas
const minusculas = newText.toLowerCase();
const parteDaString = newText.slice(0, 10); // Extrai parte da string

console.log("Texto em maiúsculas:", maiusculas); // EU AMO JAVASCRIPT!
console.log("Texto em minúsculas:", minusculas); // eu amo javascript!
console.log("Parte da string;", parteDaString); // Eu amo Jav
