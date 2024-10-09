// ---- Metodos de String -------

//length -> numero de caracteres
var nome = 'rodrigo';
console.log(nome.length)

//indexOf -> indice de tal caracter ou string que eu quero encotrar;

console.log(nome[2])

//encontrar o indice que começa determinada palavra em um testo;
var frase = 'roupa de ferro grande';

console.log(frase.indexOf('ferro'));

//slice -> extrair algo ou palavra da frase;
var ferro = frase.slice(9, 14);
console.log(ferro);

//replace -> trocar palavra ou objeto em uma variavel;
var novafrase = frase.replace('ferro', 'mandeira');
console.log(novafrase)