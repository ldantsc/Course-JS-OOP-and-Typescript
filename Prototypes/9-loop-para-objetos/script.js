/*
Loop para objetos

- Off topic

- O loop mais indicado para percorrer objetos é o for..in
- Isso por que o for normal serve mais para Arrays
*/

function Carro(marca, preco, cor, aro) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
    this.cor = cor;
    this.aro = aro;
}

let fusca = new Carro('VW', 10000, 'vermelho', 18);

// for prop - pode usar qualquer nome, porem o mais ideal prop pois queremos resgatar a propriedade

for(prop in fusca) {
    console.log(prop + ' => ' + fusca[prop])
}

/* retorna

marca => VW
preco => 10000
calota => true
cor => vermelho
aro => 18

*/

