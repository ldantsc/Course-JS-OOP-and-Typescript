/* 
RegExp

- Objeto para tratar expressões regulares;
- Podemos utilizar métodos como test e exec;

 */

let palavra = new RegExp(/at/) // procurar strings que contenham essas letras

console.log(palavra.test("Bola")) //false
console.log(palavra.test("Caminhão")) //false
console.log(palavra.test("Matheus")) //true contém at