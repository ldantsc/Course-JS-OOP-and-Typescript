/*
Function

- O objeto para criar funções
- podemos criar funções a partir do new
- Não é utilizando, apenas para fins didáticos

*/

let test = new Function(
    "a",
    "return arguments") //sintaxe
    
    console.log(test("testando função")); //retorna obj, sendo o resultado da função em si no primeiro index
    console.log(test("testando função")[0])
    //acessando o retorno da função no index 0
    
    
   //
   
   function teste(a){
     return a;
   }
   
   console.log(teste("test"))
   
/*

- Podemos utilizar a propriedade length para saber o número de argumentos

- Temos também o método toString nesse objeto;

*/

console.log(test.length)
console.log(test.toString())
console.log(test instanceof Array)
console.log(test instanceof Function) //true
console.log(test instanceof Object) //true

/*

- Os métodos que podemos utilizar do Function são call e apply;

- O call pode pegar métodos emprestado de objetos;

- O método apply funciona igual o call, mas todos os parametros
são transformados em arrays
 */

let a = {
    name: "A",
    falar() {
        console.log("Olá sou o método do " + this.name)
    }
}

b = {
    name: "B",
};

let c = {
    name: "João"
};

// call chama um  método do objeto em outro objeto
// Porém apenas funciona porque o "falar" é uma Function, o método call faz parte do objeto Function

a.falar.call(b) //executa o método no b
a.falar.call(c) //executa o método do c