// ---- Metodos de String -------

//length -> numero de caracteres
var nome = 'rodrigo';
console.log(nome.length);

//indexOf -> indice de tal caracter ou string que eu quero encotrar;

console.log(nome[2]);

//encontrar o indice que começa determinada palavra em um testo;
var frase = 'roupa de ferro grande';

console.log(frase.indexOf('ferro'));

//slice -> extrair algo ou palavra da frase;
var ferro = frase.slice(9, 14);
console.log(ferro);

//replace -> trocar palavra ou objeto em uma variavel;
var novafrase = frase.replace('ferro', 'mandeira');
console.log(novafrase);

//toLowerCase e toUperCase -> maiuscula/minuscula;
var frase2 = 'frase a ser manipulada';
var caixaAlta = frase2.toUpperCase();

console.log(caixaAlta);
console.log(caixaAlta.toLowerCase());

//trim -> remove o espaçamento desnecessario em uma string;
var nome2 = '         Rodrigo         ';
console.log(nome2);
var nome2Trim = nome2.trim();
console.log(nome2Trim);

//split -> separador string por espaço e virgula;
console.log(frase2.split(' '));

var tags = 'php, javascript, Html, css';
console.log(tags.split(','));

//lastIndexOf ->acha a ultima palavra repetida na frase string;
var frase1 = 'eu quero a ultima palavra teste desta frase de teste';
console.log(frase1.indexOf('teste'));// acha a primeira repetida na frase;
console.log(frase1.lastIndexOf('teste'));


