function Ninja(nome, shurikens) {
    this.nome = nome;
    this.shurikens = shurikens;
    this.atirarShuriken = function (inimigo) {
        if (this.shurikens > 0) {
            console.log(`${nome} atirou shuriken!`)
            this.shurikens -= 1;
            inimigo.vivo = false;
        }
    }
}

function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
}



let ninja1 = new Ninja('Naruto', 5);
let enemy1 = new Inimigo('orochimaru')


ninja1.atirarShuriken(enemy1)

console.log(enemy1)