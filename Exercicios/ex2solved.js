let pessoa = {
    nome: 'Matheus',
    exibirNome() {
        console.log("O nome deste objeto é " + this.nome)
    }
};

console.log(pessoa.nome);

pessoa.exibirNome();