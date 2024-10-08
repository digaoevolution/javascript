var lista = ['laranja', 'maçã', 'pera', 'jaca', 'limão'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {

    var lifor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    lifor.appendChild(textoLi);

    listaNoBody[0].appendChild(lifor);
}