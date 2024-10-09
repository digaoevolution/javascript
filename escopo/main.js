// ------- Escopo ---------
//no javascript podemos ter varios escopos;
// o global, que é indicado em toda a aplicação;
// os Locais, que podem existir em varias instruções como as funções;
// cuidado com variaveis de escopo global podemos alterar coisas indevidamente
var x = 1;//escopo global
var y = 3;//escopo global
console.log(x, y)
function teste() {
    var z = 0;
    console.log(z)//esta no escopo local
    console.log(x)
}
teste()
//variaveis de escopo local nunca vão se misturar com outros escopos
function testando(){
    var z = 5;
    console.log(z)
}
testando()
//o if com uma estrutura de bloco nao apresenta o escopo local 
// nao limita escopos no seu bloco
// if se define apenas em função ou global como tipo de isolamento

if(true){
    var p = 1;

}
console.log(p)