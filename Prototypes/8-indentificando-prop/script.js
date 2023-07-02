/*
Distinguir se é prop de obj ou de prototype

- E é claro que utilizando o método hasOwnProperty, conseguimos saber se a propriedade é do objeto ou do prototype;

*/

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    //removi a propriedade calota
}

Carro.prototype.cor = 'preto';
Carro.prototype.calota = false; // propriedade calota no prototype

let fusca = new Carro('VW', 10000)

// checar onde a propriedade calota pertence através da lógica if

if(fusca.hasOwnProperty('calota')){
    console.log("A propriedade calota é do objeto"); // se adicionar a propriedade calota ao objeto, esse if será true
} else if(fusca.constructor.prototype.hasOwnProperty('calota')) {
    console.log("A propriedade calota é do prototype"); // será exibido
} else {
    console.log("A propriedade calota não existe")
}

// https://pt.stackoverflow.com/questions/152503/o-que-significa-o-termo-fallback

