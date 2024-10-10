// ---- Tudo e Objeto ------
// muitos topos de dados tem metodos e propriedades;
// podemos criar nossos objetos com propriedades e matodos para auxiliar nossos programas;

//Objeto abre e feicha com chave {}
// separa as propriedades por virgula;
let pessoa = {
    nome: 'Rodrigo',
    idade: 39,
    profissao: 'programador',
    //criar um metodo em um objeto;
    //ex:
    falar: function() {
        console.log('ola, tudo bem!');  
    }, //separado por virgula;
    soma: function(a, b){
        return a + b;
    }
}
console.log(pessoa.nome);
pessoa.falar();
var soma = pessoa.soma(4, 4);
console.log(soma);