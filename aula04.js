 let x = "nada";
 console.log(x);
 x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(x);
imprimeTexto("outro texto");

// três formas de escrever funções

//imprimeTexto(soma());

function soma(){
  return 2 + 2;
}

imprimeTexto(soma());

// console.log(soma())

// parâmetros de função

                           //2       //2
function somaDeNumeros(numero1, numero2) {
   return numero1 + numero2;
   }

console.log(somaDeNumeros(2, 2))
console.log(somaDeNumeros(245, 20))
imprimeTexto(somaDeNumeros(-500, 60))


// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}

                            //9     *       5
imprimeTexto(multiplica(soma(4, 5)), soma(3, 2))


// expressão de função

const constanteSoma = function(num1, num2) { return num1 + num2 }
console.log(constanteSoma(1, 1))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar("Teo"))


function apresentar(nome) {
  return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const somaDeFlecha = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Outro Teo"))

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return "somente números de 1 a 9"
  } else {
    return num1 + num2;
  }
}

console.log(somaNumerosPequenos(2,20))
// Hoisting: arrow function se comporta como expressão

// operador maior ou igual que
// >=


