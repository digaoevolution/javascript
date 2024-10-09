// ------Metodos de Array --------
//array tambem possuem metodos;
//facilitando: adicionar e remover elementos, resgatar apenas uma parte do array e etc...;

//length -> mostra numero de elementos 
var arr = [1,2,3,4,5,6];
console.log(arr.length);

//push -> adicionar elementos ao final do array, numero ou estring;
arr.push(7);
arr.push('qalquer coisa tambem');
console.log(arr);

//pop -> remove o elemento no fim do array;
arr.pop();
console.log(arr);

//unshift -> adicinoa elemantos no inicio do array;
arr.unshift(0);
arr.unshift('adiciona no inicio');

console.log(arr);

//shift -> remover elemantos no inicio do array;
arr.shift();
console.log(arr);

// acessar o ultimo elemanto de um array;
console.log(arr[arr.length - 1]);

//isArray -> para verificar se é um array que esta sendo trabalhado;
console.log(Array.isArray(5));

console.log(Array.isArray(arr));