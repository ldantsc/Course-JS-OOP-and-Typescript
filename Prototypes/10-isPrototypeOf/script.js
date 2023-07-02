/*
Checar se é prototype de algum objeto


Com o método isPrototypeOf, conseguimos checar se um objeto é prototype de outro;
*/

let equipamentosDoCarro = {
    preco: 10000,
    calota: true,
    cor: 'Azul',
    aro: 16,
}



function Carro(marca) {
    this.marca = marca;
}


Carro.prototype = equipamentosDoCarro; // adicionando prototype da classe Carro nos equipamentos do carro

let fusca = new Carro('VW');

// console.log(equipamentosDoCarro.isPrototypeOf(fusca)) // false porque ainda não foi adicionado

console.log(equipamentosDoCarro.isPrototypeOf(fusca)) 
// verificar se o objeto equipamentosDoCarro, é prototype do objeto fusca true

