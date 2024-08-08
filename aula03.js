// Tipagem dinâmica

let minhaVar;
console.log(minhaVar)
minhaVar = 0;
console.log(minhaVar)
minhaVar = "texto"
console.log(minhaVar)
minhaVar = true
console.log(minhaVar)

// Alguns erros comuns

// const numero; Erro de não declarar uma constante
// console.log(numero ; Erro de sintese
 const minhaVariavel = "oi"; 
console.log(minhaVariavel); // erro de variável não declarada


// log -> registro

const minhaVar2 = true;

// console.log(245)
// console.log("eu sou um texto")
// console.log(minhaVar2)

// tratamento de erro!

console.error('deu erro!')

// modo clássico, usando o if(){}

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

// modo ternário, utilizando a estrutura ___ >= ___ ? ___ : ___
// modo ternário, utilizando a estrutura ___ <= ___ ? ___ : ___
// modo ternário, utilizando a estrutura ___ = ___ ? ___ : ___

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

//Utilizar com bastante cautela 

// Template string $`....{}...`

const nome = "Teo";
const idade = 32;
const cidadeDeNascimento = "Foz do Iguaçu";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)