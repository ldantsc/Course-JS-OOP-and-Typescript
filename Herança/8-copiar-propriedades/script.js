/*
Copiando propriedades

- Podemos em vez de utilizar o fake constructor, copiar as propriedades por um loop e realizar a herança;

- Precisamos utilizar a propriedade uber, que nos dará acesso ao Obj Pai

- A parte ruim desta abordagem é que ela recria as propriedades e métodos

*/

function extend(Filho, Pai) {
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto) {
        filhoProto[i] = paiProto[i];        
    }
    // filho tem acesso ao obj pai
    filhoProto.uber = paiProto;
}

function Veiculo() {}

Veiculo.prototype.carenagem = 'aço';
Veiculo.prototype.ligar = function ()       {
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
extend(Carro, Veiculo);

Carro.prototype.ligar = function() {
    console.log('O Carro ligou!')
}

Trem.prototype.ligar = function() {
    console.log('O trem ligou!')
}

let trembala = new Trem('Trem Bala')
let ferrari = new Carro();
let trem = new Trem('Trem')

//trem.ligar() // o trem ligou!
ferrari.ligar() // o carro ligou!
trembala.ligar() // o trem ligou! 

console.log(trem)