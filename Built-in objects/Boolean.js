/*
Boolean 

- O boolean também é um objeto e serve para valores booleanos (true or false)
- Podemos criar com new e o método valueOf() da o valor do booleano;
- Este objeto não tem métodos
- E é claro, podendo ser dispensado, utilize o método convencional;

*/

let x = new Boolean(false);

console.log(x)
console.log(x.valueOf())

//

let a = true;
let b = new Boolean(true);

console.log(a);
console.log(b); // dessa forma o boolean retorna [Boolean: true]
console.log(b.valueOf()) //valueOf para retornar apenas o valor do boolean

console.log(a instanceof Boolean) // false...  boolean != Boolean