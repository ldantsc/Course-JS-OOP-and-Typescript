/* Crie um objeto inimigo, com as propriedades nome e vivo (que é um boolean e inicie true) 
    O método atirarShuriken do exercício passado deve 'matar' o inimigo, setando as propriedades
    do inimigo vivo como false
    */

let enemy = {
    name: 'Enemy',
    live: true,
    death () {
        if (this.live == false) {
            return (console.log("Inimigo abatido pelo " + ninja1.nome))
        }
    }
}

function Ninja(nome, shurikens) {
    this.nome = nome;
    this.shurikens = shurikens;
    this.atirarShuriken = function () {
        if (this.shurikens > 0) {
            console.log(`${nome} atirou shuriken!`)
            enemy.live = false;
            enemy.death()
        }
    }
}



let ninja1 = new Ninja('Naruto', 5);
ninja1.atirarShuriken()
