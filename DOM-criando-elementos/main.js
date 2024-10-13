// Incerindo no body
//Criando paragrafo 
var novoParagrafo = document.createElement('p');
var texto = document.createTextNode('Paragrafo criado com javascript');
novoParagrafo.appendChild(texto)
console.log(novoParagrafo)
//selecionar o body
var body = document.querySelector('body');
console.log('body');
//Incerindo o paragrafo no HTML
body.appendChild(novoParagrafo)

// Incerindo em container
var container = document.getElementById('container')
console.log(container)
var el = document.createElement('span')
el.appendChild(document.createTextNode('texto do span'))
console.log(el)
container.appendChild(el)