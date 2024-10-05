// const - nao pode ser alterada
// let e var - pode ser alterada
// var - cria variaveis
// strings - texto
// length - mostra quantas letras tem
// toUpperCase - letra maiuscula
// toLowerCase - letra minuscula
// split - separa por virgula
// float - numeros quebrados

// -----strings---------
const nome = 'Rodrigo';
const sobrenome = 'Costa';
console.log(`Meu Nome é ${nome.toUpperCase()} ${sobrenome.toLowerCase()}`);

const nomes = 'Rodrigo, Cezar, Costa';
console.log(nomes.split());

// -----number -----------
// numeros entre aspas é considerado como strings.
// possivel concatenar string com o +.
const numero = 39;
console.log(numero+10);
console.log(numero*10);
console.log(typeof numero.toString());

var nome1 = 'Rodrigo';
console.log(nome1 + 'Possue idade de ' + numero);


var float = 5.5;
console.log(float + 2);

console.log(NaN);
console.log(typeof NaN);

// ----booleanos - true / false-------
console.log(2 == 1);
console.log(2==2);
console.log(typeof true);
console.log(typeof false);

// ----null & undefined 
// hoisting - as funções e variaveis sao inicializadas no topo do codigo.
console.log(typeof nome2);
nome2 = 'mateus';
var nome2 = null;
console.log(nome2);

// ---Tipos de Dados: Objetos---------
// para tralahar em objetos usa chave {}
// guardar varias informações eum uma variavel para acessar posteriormente.
var obj = {
    nome3: 'Rodrigo Cezar da Costa',
    idade: 39,
    profissao: 'Programador',
    dedicaçao: true,
};
console.log(obj);
console.log(typeof obj);

console.log(obj.nome3);
console.log(obj.idade);
console.log(obj.profissao);

console.log(`O meu nome é, ${obj.nome3}, tenho ${obj.idade} anos de idade e sou ${obj.profissao}!`);

obj.nome3 = 'Rodrigo apenas'
console.log(obj.nome3);
//pode criar uma nova propriedade ou mudar o que esta dentro de objeto.
console.log(obj);

// ----Tipos de dados: Arrays-------
// para trabalhar com arrays usa colchete []
// a contagem sempre começa por 0 e depois 1...
// são considerado como objetos, porem serve como listas.
// podem ter itens de qualquer tipo de dados tambem.
// não por chave e valor, e sim por indice.
// com ideia de que nao mude dados para que possa percorrer e ter ação com eles.
var arr = [
    150,
    'rodrigo',
    true,
    {teste: 1, teste: 2}
];
console.log(arr);

var arr2 = [1,2,3,4,5,6];
console.log(arr2);

//acessar elementos dentro da arrays
console.log(arr[1]);
console.log(arr[0]);

// incerir valores elementos dentro da array
arr[4] = 39;
console.log(arr);
console.log(arr[4]);

//mudar elementos
arr[0] = 'mudei elemento';
console.log(arr);
console.log(arr[0]);
console.log(typeof arr);