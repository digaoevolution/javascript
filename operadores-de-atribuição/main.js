
// -----Operadores de Atribuição ----------
//maneiras de atribuir valor a uma variavel;
//mais utilizadas são: +=, -=, *=, /= ;
//É uma forma resumida da operação: x=x+y ;
//É comum tambem utilizar operadores ++ ou -- ;

var x = 1;
var y = 2;
//soma
console.log(x = x + y);
console.log(x += y);
//subtração
console.log(x -= y)
//multiplicação
console.log(x *= y)
//divisão
console.log(x /= y)
// comum utilizar em loops
console.log(x++);
console.log(x--);

while(x <= 100){
    console.log(x);
    x *= 2;
}
console.log(x)

var j = 5

while(x > 0){
    console.log(x)
    x -= j;
}

