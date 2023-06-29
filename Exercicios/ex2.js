/*
Crie um objeto pessoa, que tem uma propriedade nome;
Crie um metodo que exibe o nome do objeto Pessoa;
*/

let pessoa = {
    name: 'Diogo',
    exibirNome() {                //this se refere ao proprio objeto
        console.log(`Seu nome: ${this.name}`)
    }
}


pessoa.exibirNome()