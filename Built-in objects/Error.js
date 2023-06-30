/*
Error

- Objeto para tratar de erros;
- Ele é o que deriva dos erros que recebemos;
E também podemos criar os nossos erros;

*/

try {
    throw new Error('Deu errado!') //instanciar um novo erro | quando throw, cai imediatamente para o catch
} catch(e) {
    console.log(e.name + ": " + e.message)
}

// Error: Deu errado!

