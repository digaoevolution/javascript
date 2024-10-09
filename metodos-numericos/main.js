// ----- Metodos Numericos --------
//Numer contem metodos uteis para trabalhar numeros em javascript;
// maioria dos tipos de dado tambem tem objeto pai, como: String, Object e Array;

//parseFloat -> fracionado 10.1
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'))

//parseInt -> numero inteiro 10
console.log(parseInt('10'));
console.log(parseInt('10.5'));

//toFixed -> arredonda casa decimal para quntidade em numero
console.log(23.34343434.toFixed(2));

//isNaN -> verificar se tem numero
console.log(isNaN('teste'))
console.log(isNaN(12));
console.log(isNaN('12'))//string

//MAX_VALUE e MIN_VALUE -> maximo e minimo aceito no javascript 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//se passar o valor 1.7976931348623157e+308 da infinite ex:
console.log(1.7976931348623157e+310)



