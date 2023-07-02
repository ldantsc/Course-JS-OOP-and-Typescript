/*
Melhorando os objetos do Javascript

- Podemos criar novos métodos e propriedades para os objetos do JS existentes;

*/

Array.prototype.checkLength = function() {
    return this.length;
}

Array.prototype.somaDoisPrimeiros = function() {
    return this[0] + this[1];
}

let a = [1,2,3,4,5];

let b = [22,33,44]

console.log(a.checkLength()); //length da variável a = 5
console.log(b.checkLength()) //length da variável b = 3

console.log(a.somaDoisPrimeiros()) // retorna resultado da variável a[indice 0] + a[indice 1] = 3