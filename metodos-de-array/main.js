// ------Metodos de Array --------
//array tambem possuem metodos;
//facilitando: adicionar e remover elementos, resgatar apenas uma parte do array e etc...;

//length -> mostra numero de elementos 
var arr = [1,2,3,4,5,6];
console.log(arr.length);

//push -> adiciona elementos ao final do array, numero ou estring;
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

//shift -> remove elemantos no inicio do array;
arr.shift();
console.log(arr);

// acessar o ultimo elemanto de um array;
console.log(arr[arr.length - 1]);

//isArray -> para verificar se é um array que esta sendo trabalhado;
console.log(Array.isArray(5));

console.log(Array.isArray(arr));

//splice -> extrai/adicino algo ou palavra especifica;
//adicionar elementos no meio de um array;
var arr1 = [1,2,3,4,5,6,7,8,9];
// 2 = indice/posição ... 0 = nao apaga/adiciona..... 222=numero adicionado;
arr1.splice(2, 0, 222);
console.log(arr1)
//remover elemento em um array;
//será removido entre posição 2 a 3 ex: 1,2,x3,x4,5,6,7,8,9. pois o zero(0) sera contado na remoçao como primeiro.
arr1.splice(2, 3);
console.log(arr1);

//join -> transformar um array em uma string;
var arr2 = ['canudo', 'de', 'papael'];
console.log(arr2.join(' '));

//reverse -> inverter uma array;
console.log(arr2.reverse())
