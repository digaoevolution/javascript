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
        console.log('continue pulou para o proximo valor aqui')
        continue
    }
    console.log('resultado' + x);
}
