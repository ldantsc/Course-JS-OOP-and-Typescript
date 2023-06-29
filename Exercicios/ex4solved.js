function Ninja(nome, qtd) {
    this.nome = nome;
    this.estoqueShuriken = qtd;
    this.atirarShuriken = function() {
        if (this.estoqueShuriken > 0) {
            console.log("O ninja atirou a shuriken!")
            this.estoqueShuriken -= 1;
        } else {
            console.log(`${nome} não possui mais shurikens para jogar!`)
        }
    }
}


let ninja1 = new Ninja('Naruto', 3);

ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()
ninja1.atirarShuriken()