/* Crie um objeto Ninja, por constructor function
    Com a propriedade de nome do ninja e o método atirarShuriken
*/

function Ninja(nome) {
    this.nome = nome;
    this.atirarShuriken = function() {
        console.log(`${nome} atirou Shuriken`)
    }
}

let ninja1 = new Ninja('Naruto')

ninja1.atirarShuriken()