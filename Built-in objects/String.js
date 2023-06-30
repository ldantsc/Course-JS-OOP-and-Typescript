/*
String

 - Podemos criar uma string atraves do objeto new;
 - Temos acesso a propriedade length, que dá o número de caracteres;
 - Podemos acessar um caractere pelo seu índice

 */

let s1 = new String('teste');
let s2 = "testando";

console.log(s1.length); // 5
console.log(s2.length); // 8

console.log(s1[0]); // t
console.log(s2[0]); // t

/*
- O objeto String também dá muitos métodos interessantes;
- E como os arrays é de suma importância conhecer estes métodos;
*/

console.log(s1.toUpperCase()); // TESTE
console.log(("TESTE").toLowerCase()); //teste
console.log(s1.charAt(4)) // e | mesma coisa que...
console.log(s1[4]) // e | ...
console.log(s1.indexOf('s')) // 2

/*
- Mais alguns métodos do String...
*/

let string = 'teste'

console.log(string.slice(1, 3)); // es |exclui os caracteres do indice do começo e final
console.log(string.substring(1, 3)); // es
console.log(string.split("")); // retorna uma array da string 