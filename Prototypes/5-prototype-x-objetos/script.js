/*
Props do obj X props do Prototype

- A ordem de acesso é: primeiro objeto e depois o prototype

- As propriedades podem coexistir

*/

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = 'preto'; // adicionando propriedade cor ao prototype
Carro.prototype.calota = false;

let fusca = new Carro('VW', 10000)

console.log(fusca.cor)

fusca.cor = 'rosa' //Alterou pois alteramos diretamente no obj

console.log(fusca.cor)

console.log(fusca.calota) //imprime true, a instância tras como true, tras o que esta definida na classe carro
