/*
Number

- O Number também um objeto para tratar os números, tem métodos
conhecidos como parseInt e parseFloat;
- Podemos criar um novo objeto com new também
*/

console.log(Number.parseInt(12.7327)) // 12
console.log(parseInt(12.7327)) // 12, não precisa explicitar o objeto Number
console.log(Number.parseFloat('12.83')) // 12.83

let a = 2
let n = new Number(3);

console.log(a) // 2
console.log(n) // [Number: 3]

let c = 12.555

console.log(Number.parseInt(c)) // 12
console.log(parseInt(c)) // 12

let d = "12.555"

console.log(Number.parseFloat(d)) // 12.555
console.log(parseFloat(d)) // 12.555

/*

- Algumas propriedades que são interessantes no Number são MAX_VALUE e
MIN_VALUE, para saber o máximo e o mínimo que o JS atinge;

*/

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308 (Retorna o numero máximo do JS)
console.log(Number.MIN_VALUE) // 5e-324 (Retorna o menor número possivel do JS)
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 (Número max mais seguro para trabalhar no JS)
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991 (Número min mais seguro para trabalhar no JS)
console.log(Number.NaN) // NaN
console.log(Number.POSITIVE_INFINITY) // Infinity

/*

- Alguns outros métodos importantes de Number são: toFiexed, toPrecision
e toExponential;

- E o detalhe é que não precisamos utilizar esses métodos com o Number, só
o método já será interpretado pelo JS;

*/

let f1 = 12.384562

console.log(f1.toFixed(3)) //12.385
console.log(f1.toPrecision(3)) //12.4
console.log(f1.toExponential()) // 1.2384562e+1

