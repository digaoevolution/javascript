// ------ Break e Continue -----------
// Com break podemos encerrar uma instrução;
// com continue podemos pular uma instrução;
// utilizado na maioria das vezes em loops ;

for(var i = 10; i > 0; i--){
    console.log(i)
    if(i === 5){
        break
    }
}
console.log('Deu o Break')

var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60 || x === 80) {
        console.log('continue: pulou para o proximo valor')
        continue
    }
    console.log('resultado: ' + x);
}

// -------Funções (function)---------
//sao blocos de codigos reutilizaveis;
//evitando a repetição da logica de um programa em diversas partes do codigo;
//a função precisa ser invocada para ser executada;
// tornando facil de dar manutenção e de ser lida;

function primeiraFuncao() {

    console.log('Mundo das funções')
}
primeiraFuncao();


function dizerNome(nome) {
    console.log('O nome e: ' + nome)
}
//reaproveitando em varias partes trocando parametros.
dizerNome('Rodrigo0')
dizerNome('Rodrigo1')
dizerNome('Rodrigo2')
dizerNome('Rodrigo3')
//passar como variavel o paramtro para uma função.
var nomeBdados = 'rodrigo costa'
dizerNome(nomeBdados)

//retorne
function soma(a, b) {//sempre separado por virgula.
    var soma = a+b;
    return soma;
} //proporciona receber um valor de volta da função
var soma1 = soma(2, 5);
console.log('resiltado ' + soma1);

console.log(soma(4, 5));
console.log(soma(10, 7));
