/*
Array

- O pai de todos os arrays
- Pode instânciar um arrays
- Possuí propriedades e métodos

*/

// criando array
let x = new Array(1, 2, 3)
// adicionando um valor no index 3 do array
x[3] = 4;
x.toString()
console.log(Array instanceof Object) // true

/* 
 porque por mais que o objeto Array seja um objeto pai dos arrays, acima dele existe um Object;
 Quando uma array é criada ele possui um objeto Array pai e acima um Object pai,
 isso chama-se "Prototype Chain"
 
*/

let a = [1, 2, 3]
let b = new Array(4, 5, 6)

console.log(a)
console.log(b)

console.log(a.toString())
console.log(b.toString())

console.log(a instanceof Array) // true
console.log(a instanceof Object) // true

/*
- A propriedade length indica o numero de itens de um array 
- E temos métodos famosos como push, pop e join
- É importante aprender esses métodos para a melhor utilização do JS
*/

console.log(b.length)

let c = []
c.push("elemento") // add um elemento no array
console.log(c)
c.pop() // remove o último elemento 
console.log(c)

let e = {}
e.push(4) // nesse caso de um objeto, o método push não será executado, pois esse método pertence ao objeto pai Array, e não no Object