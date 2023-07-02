/*
Maneira de utilizar o prototype se ja tem prop

- Podemos deletar uma propriedade, e voltar a utilizar o prototype

- Pois mesmo sendo sobrescrito, ainda estará disponível;

*/

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true; // calota definida como true no objeto
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false; // calota definida como false no objeto 

let fusca = new Carro('VW', 10000)


console.log(fusca.calota) // true, pois calota é true no objeto

// deletamos a propriedade calota do objeto

delete fusca.calota

// agora imprimindo o dado da calota, porém como foi deletada no objeto, ele vai buscar a propriedade no prototype
// ou seja agora esta sendo exibido o Carro.prototype.calota

console.log(fusca.calota) // false

// fallback, quer dizer que ele verifica obj e depois o prototype
// se obj estiver vazio ele vai nuscar o dado no prototype 
// obj[] -> prototype[dado]