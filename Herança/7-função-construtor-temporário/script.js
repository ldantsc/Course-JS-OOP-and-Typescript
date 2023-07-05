/*
Isolando a herança em uma função

- Para facilitar e deixar a herança reutilizável também, podemos utilizar uma função

*/

function extend(Filho, Pai) {
    let F = function() {};
    F.prototype = Pai.prototype;
    Filho.prototype =  new F();
}

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

// construtor temporário por função
extend(Trem, Veiculo);
extend(Carro, Veiculo)

let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

trem.ligar() // o veiculo ligou!
ferrari.ligar() // o carro ligou!
trembala.ligar() // o veiculo ligou! 

console.log(trembala.carenagem);