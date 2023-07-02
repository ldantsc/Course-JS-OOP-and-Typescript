/* 
Modificando do prototype

- Ao Alterar o prototype, todas as instâncias ganham seus novos métodos ou propriedades;

*/

let joao = new Pessoa("João", 15);

Pessoa.prototype.gritar = function() {
    console.log("AAAAAHHH")
}

joao.gritar()