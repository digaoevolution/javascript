//selecionae o elemento

var titulo = document.querySelector('#titulo');
console.log(titulo);

//Alterar conteudo;
//innertHTML 
titulo.innerHTML = 'testando o texto alterado!';

//textContent - mais utilizado, recomendado e performado
var subtitulo = document.querySelector('.subtitulo');
console.log(subtitulo);

subtitulo.textContent = 'testando o textContent!'