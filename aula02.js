//var - primeira forma de escrever uma variável no javaScript, hoje em dia se evita;

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let - Maneira de declarar uma variável que muda de valor durante o programa;

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)

//const - Utilizado para criar variáveis que são fixas, que não se alteram durante o código

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'retângulo') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)

const x = 0;

//Boolean
const usuarioLogado = true
const contaPaga = false

//truthy ou falsy
//0 -> false
//1 -> true

console.log(0 == false)//retorna true
console.log("" == false)//retorna true
console.log(1 == true)//retorna true


console.log("null e undefinned")
//undefined
//null -> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

console.log("Quando o undefined está em sua forma pura")

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);


console.log(typeof minhaVar);
console.log(typeof varNull);

// tipo de dado 
// booleanos 

// conversão implícita
const numeroNumber = 456;
const numeroString = "456";

console.log(numeroNumber == numeroString)
console.log(numeroNumber === numeroString)
console.log(numeroNumber + numeroString)

// conversão explícita
//Number()
//String()
console.log(numeroNumber + Number(numeroString))

const numeroConvertido = Number(numeroString)

console.log(numeroNumber + numeroConvertido)

const numeroConvertidoErrado = Number("456a")

console.log(numeroNumber + numeroConvertidoErrado)
