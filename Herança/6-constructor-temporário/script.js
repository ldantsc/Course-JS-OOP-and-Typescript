/*
Construtor temporário

- Caso você tenha a solução que não te deixaria optar por propriedades e métodos que não são
alteráveis, você pode utilizar um construtor temporário e resolver o problema

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


Trem.prototype = Veiculo.prototype; 

// Construtor temporário
let F = function() {};
F.prototype = Veiculo.prototype
Carro.prototype =  new F()

Carro.prototype.ligar = function() {
    console.log("O carro ligou");   
}


let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

trem.ligar() // o veiculo ligou!
ferrari.ligar() // o carro ligou!
trembala.ligar() // o veiculo ligou! 

console.log(trembala.carenagem);