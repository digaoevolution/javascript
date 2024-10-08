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
