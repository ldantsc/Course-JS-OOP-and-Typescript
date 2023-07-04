/*
Prototype Chain

- É a maneira defaul da linguagem de fazer herança;

- Podemos instanciar objetos no prototype de outros, criando a herança;

*/

// CLASSE VEICULO PAI
function Veiculo() {
    this.carenagem = 'aço';
    this.ligar = function (){
        console.log("o veiculo ligou!")
    }
}

//Filho
function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50
}

//Filho
function Carro() {
    this.pneus = 4;
}

//Trem.prototype é um objeto vazio
Trem.prototype = new Veiculo(); //criando uma instancia de Veiculo dentro do prototype
Carro.prototype = new Veiculo(); //Carro herdando as propriedades e métodos da classe Veiculos()

let trembala = new Trem('Trem Bala')
let ferrari = new Carro();

console.log(trembala.tipo) // Trem Bala

console.log(trembala.ligar()) // o veiculo Ligou! // herdou métodos e propriedades de Veiculo()

console.log(ferrari.ligar()) // o veiculo Ligou!

