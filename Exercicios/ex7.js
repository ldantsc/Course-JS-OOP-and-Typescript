/* Crie dois objetos que compartilhem nomes de propriedades via object literals
    Uma variável deve definir a parte que se repete nas propriedades dos objetos
*/

/*

--  Era só contatenar a propriedades que compartilham o mesmo nome kkk 
    Deu certo mas fiz o exercicio de forma errado hehe  --

let id = 1
let username = "Lucas"

let user = {
    id: id,
    username: username,
    age: 27,
    provider: "TIM BRASIL S/A"
}

let config = {
    id: id,
    username: username,
    ip: "123.456.78.1",
    port: 8080,
    wireless: true
}

console.log(user)
console.log(config)

*/

let u = "user_"
let id = 1
let username = "Lucas"


let user = {
    [u+"name"]: username,
    age: 27,
}

let config = {
    id: id,
    [u+"name"]: username,
    wireless: true
}

console.log(user)
console.log(config)