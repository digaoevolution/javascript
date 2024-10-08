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

