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
// ------Operadores Logicos ------------
// operadores logicos && é conhecido tambem como AND;
// ele vai retornar true apenas se as duas expressões retornarem true;
// qualquer outro resultado o operador logico AND retornara false;
var nome5 = 'pedro';
var idade3 = 16;

if(nome5 == 'pedro' && idade3 == 18){
    console.log('idade e nome estao corretos !')
}else{
    console.log('nome ou idade estam errado')
}
// ------- Operador Logico || ( OR ) ---------
// o operador logico || é conecido tambem como OR;
// ele retorna true caso uma das operações retorne verdadeiro;
// o OR retorna false apenas se as duas expressões forem falsa;

var idade4 = 20;
var nome6 = 'maria';

if(nome6 == 'maria' || idade4 > 19){
    console.log('permissão concedida')
}else{
    console.log('permissão negada ')
}
//o AND exige que todos resultados sejam true
// o OR retorna true tendo apenas uma verdadeira
//ex:
if((nome6 == 'joao' || 30 > 20) && 10 == 10){
// entre parenteses sempre serão resolvidos primeiro
    console.log('passa')
}else{
    console.log('nao passa')
}

// ------Operador logico ! NOT --------
//o operador logico ! e conhecido como NOT;
//este operador inverte o valor em booleano que a expressão retornou;
// se recebe true vira false e vice versa;

if(!false){//sempre vai na frente da expressão.
    console.log('virou true');
}

var nome7 = 'rodrigo';
if(!(nome7 == 'rodrigo')){//operador ! inverteu o resultado 
    console.log('correto')
}

// ----- Estruturas de Repetição ------
//servem para repetir n vezes uma operação;
// ex: repete uma detrminada logica em cada elemento de um array;
// estruturas mais comuns sao: while e for;
// ** tomar cuidado com loop infinito.**

// --while--
// A mais simples usada no javascript;
// tendo ideia que se repita algo ate atingir tal condição;
// WHILE = enquanto

var p = 0;

while(p <= 5){
    console.log('teste de repetição' + p)
    //incrementador 
    p++;
}

var arr = ['a', 'b', 'c', 'd', '------'];// passando por elemantos.
var r = 0;

while(r <= 4){
    console.log(arr[r])
    r++;
}

var palavra = 'Rodrigo';//passando por caracteres.
var i = 0;// começa contagem apartir do zero

while(i <= 6){
    console.log(palavra[i]);
    i+=1;//ou i++
}
// -----Operadores de Atribuição ----------
//maneiras de atribuir valor a uma variavel;
//mais utilizadas são: +=, -=, *=, /= ;
//É uma forma resumida da operação: x=x+y ;
//É comum tambem utilizar operadores ++ ou -- ;

var x = 1;
var y = 2;
//soma
console.log(x = x + y);
console.log(x += y);
//subtração
console.log(x -= y)
//multiplicação
console.log(x *= y)
//divisão
console.log(x /= y)
// comum utilizar em loops
console.log(x++);
console.log(x--);

while(x <= 100){
    console.log(x);
    x *= 2;
}
console.log(x)

var j = 5

while(x > 0){
    console.log(x)
    x -= j;
}