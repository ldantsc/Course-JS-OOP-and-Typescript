/*
Porque não é uma boa ideia usar (11-prototype-obj-js)

- Futuramente pode vir um método com o mesmo nome na linguagem;

- Desenvolvedores podem desconhecer o método, não sabendo de onde ele vem gerando confusão;

- Para minimizar os problemas, faça um checagem antes;

*/

// if verifica se o checkLength for diferente de function 
// verifica se a método checkLength existe
if(typeof Array.prototype.checkLength !== 'function') {
    Array.prototype.checkLength = function() {
        return this.length;
    }
}

// nesse caso o método join existe
// então nesse caso o if esta dizerdo se existir esse método ele não executa ou sobrescreve o método join
// se não utilizar esse check, o método join vai ser sobrescrito, mudando a função desse método 
if(typeof Array.prototype.join !== 'function') {
    Array.prototype.join = function() {
        return this[0] + this[1] + this[2];
    }
}

let a = [1,2,3,4,5];

let b = [22,33,44]

console.log(a.checkLength());
console.log(b.join());

console.log(a.join());