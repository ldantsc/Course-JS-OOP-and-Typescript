/*
Precauções

- utilizando a abordagem de clonar só o prototype tem um side effect;

- Se você muda o prototype, toda a cadeia que o utiliza, vai ser alterada também;

- Então utilize desse jeito apenas quando não precisa mudar métodos e propriedades;

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
Carro.prototype = Veiculo.prototype;

// Problema do prototype chain, alterou pois esta referenciando a função do 'pai' Veiculo()   
Carro.prototype.ligar = function() {
    console.log("O carro ligou");   
}


let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

trem.ligar() // o carro ligou!
ferrari.ligar() // o carro ligou!
trembala.ligar() // o carro ligou! 

console.log(trembala.carenagem);