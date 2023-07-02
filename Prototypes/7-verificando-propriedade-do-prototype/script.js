/*
Verificando a propriedade do prototype

- Da mesma forma que o objeto tem método de verificar propriedades;

- Os prototypes tem também;

*/

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false;

let fusca = new Carro('VW', 10000)

console.log(fusca.hasOwnProperty('marca')) // retorna true porque ele tem o dado marca
console.log(fusca.constructor.prototype.hasOwnProperty('marca')) // false

// criando marca no prototype
Carro.prototype.marca = 'test'

console.log(fusca.constructor.prototype.hasOwnProperty('marca')) // true