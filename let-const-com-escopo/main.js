// ------- Let e Const + Escopo ----------
//utilizando let e const podemos criar escopo ate em instruções como if
//deixando o codigo mais confiavel
//separando cada bloco em um escopo

let x = 5;// var x=5
const y = 10;

x=12;
 console.log(x)
 console.log('const ' +y)

 if(true){
    let x = 20;
    console.log(x);
    const y = 50;
    console.log('const if ' +y)
    
 }
 console.log(x)

if(20 > 10){
    const y = 100;
    console.log(y)
}

for(let x = 0; x <= 10; x++){
    console.log(x)
}