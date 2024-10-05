// ---Condicional: if ----
// executa um bloco de codigo se a instrução for verdadeira;
// Se for falsa, segue o codigo normalmente;
// lembrando que: true e false sao do tipo boolean;

var idade = 19;

if(idade >= 18){
    console.log('Você é Maior de idade!')
}
if(idade <= 17){
    console.log('você é Menor de idade!')
}

// --- Operadores de comparação ------
// operadores:
/* ==  -> igual
   !=  -> diferente
   >   -> maior
   <   -> menor
   >=  -> maior ou igual
   <=  -> menor ou igual
*/
// com uma expressão de comparação podemos obter true ou false;
// o zero(0) e entendido como false e o um(1) como true;
var possuicarro = 1;
if(possuicarro){
    console.log('pode usar o carro!')
}
//usando (=) atribui e usando (==) compara;
var nome1 = 'João';
if(nome1 = 'Rodrigo'){
    console.log('seu nome joao foi atribuido(=) agora como Rodrigo')
}
var nome2 = 'Jose';
if(nome2 == 'Jose'){
    console.log('seu nome jose e igual(==) a jose ')
}
if(nome2 != 'Rodrigo'){
    console.log('seu nome nao e jose')
}

// ------- Condicional: else e else if ---------
// if sendo negativa, podemos adicionar else;
// sendo a seguinte condicional a ser executada;
// podemos entao criar uma bifurcação no codigo;
// o else if tem possibilidade de fazer outra verificação e adicionar mais um bloco de codigo;
var nome3 = 'joao';
var nome4 = 'andre';

if(nome3 == 'andre'){
    console.log('seu nome nao e igual...')
}else if(nome3 == 'andre')
    console.log('seu nome e igual...')
else {
    console.log('seu nome pode ser andre!')
}

var idade2 = 17;

if(idade2 >= 18){
    console.log('tem permissão para entrar')
}
else if(idade2 < 18)
    console.log('nao tem permissão para entrar')

// -------Comparação de tipo e valor --------
//dois outros operadores de comparação existem: === e !== ;
// a função e comparar valor e tipo de dado;
// === -> comparação de tipo
// ==  -> comparação de valor
// !== -> diferente

var numero = 5; // number

if(numero == 5){   
    console.log('mesmo valor com mesmo tipo.')
}
numero = '5'; // string
if(numero === 5){ 
    console.log(' mesmo valor com tipo diferente')
}
numero = 'cinco' // string
if(numero !== 5){
    console.log('nao e 5 de tipo number')
}