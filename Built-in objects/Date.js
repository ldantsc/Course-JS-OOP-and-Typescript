/*
Date

- Objeto que lida com datas;
- Podemos criar uma nova data a partir de agora;
- Ou a partir de uma data que precisamos;
*/

console.log(new Date()) // data atual
console.log(new Date(2021, 10, 4)) // indica uma data especifica
console.log(new Date(1578000231233)) // 2020-01-02T21:23:51.233Z miliseconds

/*
- Mais métodos...
 */

let date = new Date();

console.log(new Date(date.setMonth(0))) // 2023-01-30T19:27:04.469Z mudou o mês
console.log(new Date(Date.now())) // data atual 
console.log(Date.parse(new Date(date.setMonth(0)))); // 1675107017000 miliseconds
