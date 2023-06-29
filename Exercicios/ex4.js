/* No objeto ninja que a propriedade shuriken, com uma quantidade de estrelas ninja
A cada metodo do disparo, subtraia 1
O ninja não pode jogar mais shurikens caso elas tenham acabado
*/


function Ninja(nome, shurikens) {
    this.nome = nome;
    this.shurikens = shurikens;
    this.atirarShuriken = function() {
        if (this.shurikens > 0) {
            console.log(`${nome} atirou shuriken!`)
            this.shurikens -= 1;
        } else {
            console.log(`Acabou, não pode atirar!`)
        }
    }
}


let ninja1 = new Ninja('Naruto', 5);

ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()

console.log(ninja1)