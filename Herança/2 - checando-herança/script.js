/*
Checar Herança

- Quando utilizamos o prototype chain, o objeto passa a virar instância de todos os 'pais'

- verificar com instanceof

*/

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


console.log(trembala instanceof Trem) // true
console.log(ferrari instanceof Carro) // true

// true tbm porque herdou métodos e propriedades do Veiculo()
console.log(trembala instanceof Veiculo) // true
console.log(ferrari instanceof Veiculo) // true