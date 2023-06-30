/*
function

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
   - Podemos utilizar a propriedade length para 
   */