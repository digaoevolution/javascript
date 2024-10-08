// ----- Estruturas de Repetição ------
//servem para repetir n vezes uma operação;
// ex: repete uma detrminada logica em cada elemento de um array;
// estruturas mais comuns sao: while e for;
// ** tomar cuidado com loop infinito.**

// --while--
// A mais simples usada no javascript;
// tendo ideia que se repita algo ate atingir tal condição;
// WHILE = enquanto

var p = 0;

while(p <= 5){
    console.log('teste de repetição' + p)
    //incrementador 
    p++;
}

var arr = ['a', 'b', 'c', 'd', '------'];// passando por elemantos.
var r = 0;

while(r <= 4){
    console.log(arr[r])
    r++;
}

var palavra = 'Rodrigo';//passando por caracteres.
var i = 0;// começa contagem apartir do zero

while(i <= 6){
    console.log(palavra[i]);
    i+=1;//ou i++
}
// ------- Estrutura for --------
// o for tem uma sintaxe mais complexa, mas bas tante utilizado;
//A instrução fica toda em uma linha proporcionando maior coontrole;

for(var z = 0; z <= 10; z++){
    console.log('repetindo for: ' +z)
}
var arr1 = [1, 2, 3, 4]
//  variavel  -  condição   - atribuição
for(var n = 0; n < arr1.length; n++){
    console.log(arr1[n])
}
console.log(arr1.length)

for(var k = 5; k < 100; k *=3){
    console.log(k)
}