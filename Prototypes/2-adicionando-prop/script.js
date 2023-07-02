/* 
Adicionando props e métodos com prototype

- Vejamos agora como podemos adicionar propriedades e métodos;

- Perceba que não há diferença em acessá-las

*/


function Carro(marca, preco) {
    this.marca = marca
    this.preco = preco
}

Carro.prototype.rodas = 4; // Não sera adicionado no objeto, mas será adicionado no prototype
Carro.prototype.ligar = function() {
    console.log('Carro ligou')
}

let bmw = new Carro('bmw', 1000000)

console.log(bmw)

console.log(bmw.rodas) // acessando a propriedade rodas     

bmw.ligar() // acessando o método ligar