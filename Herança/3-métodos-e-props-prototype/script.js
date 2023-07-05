/*
Métodos e props no Prototype

- A ideia de utilizar o prototype é para que cada prop ou método adicionado

- Então esta herança beneficia o código, criando uma referência para os
novos objetos, deixando o programa mais performático;

- Não ocupando um novo espaço na memória a cada objeto criado

*/

function Veiculo() {}

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function (){
    console.log("o veiculo ligou!")
}

//Filho
function Trem(tipo) {
    this.tipo = tipo;
}

Trem.prototype.vagoes = 50

//Filho
function Carro() {}

Carro.prototype.pneus = 4;

//Trem.prototype é um objeto vazio
Trem.prototype = new Veiculo(); //criando uma instancia de Veiculo dentro do prototype
Carro.prototype = new Veiculo(); //Carro herdando as propriedades e métodos da classe Veiculos()


let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

trem.ligar() // o veiculo ligou!
ferrari.ligar() // o veiculo ligou!
trembala.ligar() // o veiculo ligou! 