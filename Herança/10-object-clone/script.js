/*

- Podemos utilizar uma estratégia de copiar um objeto, resolvendo este problema

- Porém veja que o código fica complexo demais, talvez não seja o caso de 
utilizar herança para isso

- Além de não utilizar prototypes nesta forma

*/

function extend(Filho, Pai) {
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto) {
        filhoProto[i] = paiProto[i];        
    }
    // filho tem acesso ao obj pai
    filhoProto.uber = paiProto;
}

                    // o = 'pai' stuff = 'filho'
function objectClone(o, stuff) {    
    let n;
    //criando construtor vazio
    function F() {};
    //acessando o construtor = objeto pai
    F.prototype = o;
    //instaciar construtor vazio
    n = new F();
    // acessando obj de fato utilizando o uber
    n.uber = o;
    // criando o loop no obj novo
    for(let i in stuff) {
        // transformar propriedades no n (construtor vazio)
        n[i] = stuff[i];
    }
    // retorna n;
    return n;
}

function Veiculo() {
    
this.carenagem = 'aço';
this.itens = ['teto solar', 'blindagem', 'motor turbo']
this.ligar = function ()       {
    console.log("o veiculo ligou!")
}
}


//Filho
function Trem(tipo) {
    this.tipo = tipo;
    this.vagoes = 50
}



//Filho
function Carro() {
    this.pneus = 4;
}


let v = new Veiculo;

let trem = objectClone(v, {
    tipo: 'trem',
    vagoes: 50
})

trem.itens.push('janela fixa')

console.log(trem);

console.log(Veiculo);

// Muito mais complexo...