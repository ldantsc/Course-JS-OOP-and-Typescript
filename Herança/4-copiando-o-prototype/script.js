/*
Melhorando ainda mais a performance

- Vimos que utilizar prototype é uma boa pratica
- Então por que não clonar só o prototype em vez da instância do objeto?

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


//copiando só o prototype em vez de instanciar uma classe

Trem.prototype = Veiculo.prototype; // copiando...
Carro.prototype = Veiculo.prototype;

//Trem.prototype = new Veiculo(); // instanciando..
//Carro.prototype = new Veiculo();


let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

trem.ligar() // o veiculo ligou!
ferrari.ligar() // o veiculo ligou!
trembala.ligar() // o veiculo ligou! 

console.log(trembala.carenagem); // aço | herdou as propriedades da Classe Veiculo