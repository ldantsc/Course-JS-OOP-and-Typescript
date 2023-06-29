//helpers

function compareObjs(obj1, obj2) {
    //instaceoff - objeto, classe
    if (obj1 instanceof obj2) {
        console.log("O objeto é " + obj1.nome + " é uma instância de " + obj2.name)
    } else {
        console.log("O objeto " + obj1.nome + " não é uma instância de " + obj2.name )
    }
}

// obj

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

compareObjs(ninja1, Ninja)
compareObjs(enemy1, Ninja)