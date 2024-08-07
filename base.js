//Tipo number

const meuNumero = 6;

const numeroUm = 2;
const numeroDois = 4;

const operacaoMatematicaI = numeroUm + numeroDois;
const operacaoMatematicaII = numeroDois - numeroUm;
const operacaoMatematicaIII = numeroDois / numeroUm;
const operacaoMatematicaIV = meuNumero * numeroUm;

console.log(operacaoMatematicaI);
console.log(operacaoMatematicaII);
console.log(operacaoMatematicaIII);
console.log(operacaoMatematicaIV);

// ponto Flutuante

const numeroDecimal = 3.3
const numeroDecimal2 = .4

const operacaoFlutuante = numeroUm / numeroDecimal

console.log(operacaoFlutuante)

// NaN -> Not a Number (Não é um número)


const meuNome = "Teotonio"

const naoEnumero = meuNome * numeroDecimal
const naoEnumero2 = meuNome / 7;

console.log(naoEnumero)
console.log(naoEnumero2)

// Dados tipo String = textos

const texto1 = "Meu nome é: "
const texto2 = 'é muito "lindo"' 
// ou pode ser: "é muito 'lindo'"
const senha = "um453nhaMu1t0F0rt3!"
const umNumeroTexto = '50'

const situacao01 = texto1 + meuNome
const situacao02 = umNumeroTexto + numeroUm
const situacao03 = situacao02 + 2

console.log(situacao01)  
console.log(situacao02) 
console.log(situacao03)


// Boolean 
// True -> verdadeiro
// False -> Falso;

const contaBooleanaFalsa = numeroUm === numeroDois 
const contaBooleanaVerdadeira = (numeroUm + numeroUm) === numeroDois
const boleanaString = texto1 === texto2 

console.log(contaBooleanaFalsa)
console.log(contaBooleanaVerdadeira)
console.log(boleanaString)
