/*
Propriedade prototype

- As funções além de suas propriedades que já vimos, também vem com a propriedade prototype criada;

- Recebemos um objeto vazio, que pode ter propriedades e métodos adicionados;

*/

function abc() {
    console.log("test");
}

abc(); //test

console.log(abc.prototype); // {constructor: ƒ}

console.log(typeof abc.prototype) // object

abc.prototype.test = 1;

console.log(abc.prototype) //{test: 1, constructor: ƒ}