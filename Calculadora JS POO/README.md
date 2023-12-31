# Projeto Calculadora POO

- Iniciando configuração do projeto construindo e configurando os arquivos html, css, js

- Html adicionando id's diferentes para executar botoes individualmente no JS, números será usado classes pois com o textContent pegamos o valor/conteudo dentro da tag de cada botão

- Estilização no CSS (Atento ao uppernumber, pois temos que tratar a estilização dele para não fazer os números sair fora da div)

## Lógica resumida

- criar classe Calculator;

- dentro do constructor, iniciar upperValue, resultValue, reset para 0;

- Start Object, instânciar a classe Calculator para a variavel calc;

- Mapear todos os botões com querySelectorAll da classe btn;

- Adicionar eventos de cliques nestes botões;

```javascript

    for(let i = 0; buttons.length > i ;i++) {
        buttons[i].addEventListener('click')
    }

```

- Atrelar o evento adicionado a um método para executar a lógica dentro do objeto
- btnPress(), para quando qualquer botão for acionado

```javascript

    for(let i = 0; buttons.length > i ;i++) {
        buttons[i].addEventListener('click', calc.btnPress) //atrelando o método btnPress() ao escutador de eventos
    }

```
*** A principio resumidamente... Mapear todos os botões e adicionar um escutador de eventos para todos eles, atrelar a um método dentro da Class, e apartir dai utilizar esse método para realizar as ações necessarias para a calculadora ***

## Criando lógica dos botões e display..

- Utilizar o método btnPress para imprimir os números na tela da calculadora
- Pegar o texto que tem dentro do botão utilizando textContent
- Guardar este texto dentro de uma várivel, nesse caso na variável 'input'

```javascript

    btnPress() {
        let input = this.textContent
    }

```
- E pegar o valor de texto do upperValue e guardar numa variavel...

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
    }

```
- Utilizar uma expressão regular para saber quando o input for enviado se ele é um número ou não
- Isso ajuda a definir se o usúario está utilizando uma operação ou um número, para ser adicionado um atrás do outro
- Usar o objeto RegExp

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        //verificar se tem só números
        // se testar números ele vai acusar que é um número | não caracteres
        var reg = new RegExp('^\\d+$')
    }

```

- Agora, colocar os números no display da calculadora

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')
        
        // Aqui vai concatenar o texto/valor upperValue com o valor do input
        calc.upperValue.textContent += input;
    }

```

- Até esse momento ele exibe os números na tela, porém, como contatenou o texto do upperValue que é 0 no HTML com o input, o número 0 se mantém ainda.

- E os simbolos das operações matematicas, AC, igual, é exibido na tela, precisamos tratar esses dados para que não seja exibido no input

*resolvendo os dois problemas acima*

- Fazer uma checagem com lógica if()

*** Se dentro do upperValue for igual a "0" (lembrando que é uma string!), vou dizer que o upperValue será substituido pelo valor da variável input ***

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')

        if(upperValue == "0") {
            //substituindo o valor do upperValue
            calc.upperValue.textContent = input;
        }
    }

```

- Porém nesse momento, ele substitui mas não adiciona mais números, para resolver utilizamos o else

*** Se não é "0" vai ser += ao input ***

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
    }

```

- Agora precisa checar se precisa adicionar ou não, pois só podemos ter um operador por vez

- Para resolver o problema de duplicação dos operadores/simbolos, adicionar um outro método de checagem 

```javascript
    // método recebendo o input, upperValue e reg
    checkLastDigit(input, upperValue, reg) {
    }

```

- Adicionar uma lógica if()

*** Se o input não é um número E se o último valor do upperValue(display) também não é um número ***

*** Se tiver adicionando um sinal e o último digito (substr) for um sinal então será executada esse funcão e não executar essa ação ***

- *https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr*

- *https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test*

*"FAZ PARTE DO OBJETO RegExp()" - O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna true ou false.*

*"FAZ PARTE DO OBJETO String()" - O substr() extrai caracteres de comprimento de uma str, contando a partir do índice inicial.*

```javascript
    checkLastDigit(input, upperValue, reg) {
        if((
            !reg.test(input) && !reg.test(upperValur.substr(upperValue.length - 1))
        )) {
            // se acontecer 9 + -> + (adicionar mais um simbolo +, como não pode acontecer, então ele cai dentro desse if e retorna true)
            return true;
        } else {
            //se não for, ele retorna false
            return false
        }
    }

```

- Agora testamos para ver se funciona

*** Se checkLastDigit(passando o input, upperValue e o reg), retorne false ***

*** Se a FUNÇÃO retornar true quer dizer que não queremos adicionar então retornar false para abortar o método btnPress  ***

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')

        //checa se precisa adicionar ou não
        if(calc.checkLastDigit(input)) {
            return false;
        }

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
    }

```

- Nesse momento foi resolvido a checagem de números e simbolos no display

## Adicionando método para limpar a tela...

- Criar mais uma lógica if para o botão de limpar a tela

*** Se o input for igual ao botão AC ***

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')
        //NOVO IF (COPIANDO A LOGICA ANTERIOR PARA O ELSE)
        if(input === 'AC') {
            // aqui vai o método de limpar a tela caso if verdadeiro
        } else {
            if(calc.checkLastDigit(input)) {
            return false;
        }

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
        }
    }

```

- Criar um método para resetar o nosso display para ele ser reutilizado

```javascript

    clearValues() {
        // simplesmente pegar e colocar os valores(string) de upperValue e resultValue para 0

        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

```

- E invocamos o metodo clearValues() antes de qualquer operação

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')

        if(input === 'AC') {
            // Método invocado
            calc.clearValues();
        } else {
            if(calc.checkLastDigit(input)) {
            return false;
        }

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
        }
    }

```

- Adicionando um espaço nos operadores (atras e frente do operador), pois esta muito colado aos números
- Futuramente isso irá ajudar a criar uma array pela string do input, para conseguir saber onde tem o operador pelos espaços, pegando o numero anterior e posterior do array e fazer a operação matemática;

- Criar uma nova lógica if...

*** Passar o RegExp test novamente para testar o input, se verdadeiro não é um número, ele é um operador, então adicione 2 espaços entre o operador utilizando a própia variavel input dentro dos backticks, ex: input = ` ${input} `  ***

```javascript

    btnPress() {
        let input = this.textContent
        let upperValue = calc.upperValue.textContent
        var reg = new RegExp('^\\d+$')

        if(input === 'AC') {
            calc.clearValues();
        } else {
            if(calc.checkLastDigit(input)) {
            return false;
        }

        // adiciona espaços aos operadores
        if(!reg.test(input)) {
            input = ` ${input} `
        }

        if(upperValue == "0") {
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
        }
    }

```

## Criando funçoes para as operações da Calculadora

- Criar mais uma lógica if else dentro do escopo input

*** Se o valor do input for equals, executar o método resolution ***

```javascript

    if(input === 'AC') {
            calc.clearValues();
            //novo else if
        } else if(input == "=") {
            //se true, vai utilizar o método resolution
            calc.resolution();

        } else {
            if(calc.checkLastDigit(input)) {
            return false;
        }
        }

```

- Criar o método resolution() (está sendo criado abaixo do método checkLastDigit)

- Criar uma variável e passando o valor/text do upperValue e utilizando o método split() para transformar em array e guardar nessa variável

```javascript

    // resolve a operação
    resolution() {
       // explode uma string em um array 
       let upperValueArray = (this.upperValue.textContent).split(" ")
       console.log(upperValueArry) // testando a variável
    }

```

- Agora precisamos fazer um looping para percorrer os valores do Array

```javascript

    resolution() {
       let upperValueArray = (this.upperValue.textContent).split(" ")
       
       // enquanto a variavel i for menor ou igual ao comprimento do array upperValueArray, i++

       for(let i = 0; i <= upperValueArray.length; i++) {

       }
    }

```

- Mas agora precisamos da variavel de resultado da operação, iniciaremos ela com zero

```javascript

    resolution() {
       let upperValueArray = (this.upperValue.textContent).split(" ")

       let result = 0; // guarda o resultado
       
       for(let i = 0; i <= upperValueArray.length; i++){

       }
    }

```
- Operação de soma...

- Criar variavel para o upperValueArray na chave i (vai estar percorrendo o array)

- Adicionar a lógica if...

*** Se o valor atual do item da array for igual '+', pegue o elemento anterior do Array e soma com o elemento posterior do Array e guardamos o resultado da nossa soma na variavel de resultado (result)  ***

```javascript

    resolution() {
       let upperValueArray = (this.upperValue.textContent).split(" ")

       let result = 0;
       
       for(let i = 0; i <= upperValueArray.length; i++){

        let actualItem = upperValueArray[i];

        if(actualItem == "+") {
            result = upperValueArray[i - 1] + upperValueArray[i + 1]
        }

       }
    }

```

- Agora vamos imprimir o resultado no display

- E também precisa passar os valores do Array para float number


```javascript

    resolution() {
       let upperValueArray = (this.upperValue.textContent).split(" ")

       let result = 0;
       
       for(let i = 0; i <= upperValueArray.length; i++){

        let actualItem = upperValueArray[i];

        if(actualItem == "+") {
            result = result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1])
        }
    
        this.upperValue.textContent = result;
        this.resultValue.textContent = result;
       }
    }

```
## Criando mais métodos de outras operações..

- Corrigir o reset do display após uma operação

*** Se tem result (se o resultado estiver preenchido) vamos dizer que calc.reset vai ser igual a 1, agora incrementando o reset para operações ***

```javascript

    resolution() {
       let upperValueArray = (this.upperValue.textContent).split(" ")

       let result = 0;
       
       for(let i = 0; i <= upperValueArray.length; i++){

        let actualItem = upperValueArray[i];

        if(actualItem == "+") {
            result = result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1])
        }
    
        this.upperValue.textContent = result;
        this.resultValue.textContent = result;
       }
       if(result) {
        calc.reset = 1
       }
    }

```

- Agora acessamos o btnPress() e verificar se tem que resetar a operação

```js

 btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        var reg = new RegExp('^\\d+$');
        
        if(calc.reset) {
            upperValue = '0';
        }
//...
}

```
- Tem um outro problema, após a operação feita, e ser resetada, o reset ainda vai estar true, não conseguimos digitar os numeros após o reset

- Criar uma outra instrução para resetar o reset(SIM É ISSO MSM KK) colocando ele para false de novo para conseguir utilizar o btnPress()

```js

 btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        var reg = new RegExp('^\\d+$');
        
        // se precisar resetar, limpa o display
        if(calc.reset) {
            upperValue = '0';
        }

        //limpa a prop de reset
        calc.reset = 0;
//...
}

```

- Mais um problema, corrigir um bug quando digitado um operador primeiro

- Colocamos mais um check

*** add se o reg.test se é um numero. Então se for um número e o reset estiver preenchido, reseta o upperValue ***

```javascript 

        if(calc.reset && reg.test(input)) {
            upperValue = '0';
        }

```

- Abstrair para deixar o código mais limpo:

```javascript

        this.upperValue.textContent = result;
        this.resultValue.textContent = result;

```

- Criando um método... 

```javascript

    //atualiza valores
  refreshValues(total) {
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
  }

```

- Invocando...

```javascript

//atualizar os totais
calc.refreshValues(result)

```

- Criar os métodos para cada tipo de operação

```javascript

    //MÉTODO ADIÇÃO
    sum(n1, n2) {
        return parseFloat(n1) + parseFloat(n2)
    }

    //MÉTODO SUBTRAÇÃO
    subtraction(n1, n2) {
        return parseFloat(n1) - parseFloat(n2)
    }

    //MÉTODO MULTIPLIÇÃO
    multiplication(n1, n2) {
        return parseFloat(n1) * parseFloat(n2)
    }

    //MÉTODO DIVISÃO
    division(n1, n2) {
        return parseFloat(n1) / parseFloat(n2)
    }

```
## Finalizando...

- Dentro do for que percorre a Array na linha 62, precisamos criar uma variável operation...

```javascript
    //...
    for(let i = 0; i <= upperValueArray.length; i++){
            
    let operation = 0;
    let actualItem = upperValueArray[i];
    //...
```

- Ela vai detectar se alguma alteração foi feita no nosso if

Nesse momento o Array que vai ter a seguinte estrutura:

                    num - op - num - op

Quando cai no numero, não conseguimos fazer a operação, então precisamos redirecionar o index. Ex:

                    num + num - num // indice 1

A partir do momento que reliza essa operação vamos ter:
                   (soma)
                    num2 - num // indice 2
                            ^
                            i

Dai não teremos como fazer uma operação após o num, temos que resetar o index para começar do zero novamente

- Criar uma lógica if 

```javascript

        // atualiza valores do array para a proxima interação
        if(operation) {
            //indice anterior no resultado da operação
            upperValueArray[i - 1] = result
            // remove os itens já utilizados para a operação
            upperValueArray.splice(i, 2);
            //atualizar o valor do índice
            i = 0;
        }

```

- Mudar o item atual para realizar as operações através dos métodos criados

- Mantendo a orderm de multiplicação, divisão...

```javascript
        // Faz a multiplicação
        if(actualItem == "x") {
             result = calc.multiplication(upperValueArray[i-1], upperValueArray[i+1])
        //Faz a divisão
        } else if(actualItem == "/") {
            result = calc.division(upperValueArray[i-1], upperValueArray[i+1])
        }

```
- Não colocar a soma ou subtração nesse if, pois ele pode executar uma soma ou subtração antes de uma divisão ou multiplicação e deixar o valor incorreto

- Verificar se nesse array, tem uma multiplicação ou divisão, com intenção de pular essa interação

- Criar um else if

*** Se o Array não incluir multiplicação e se não incluir divisão ***

```javascript

        //Faz a multiplicação
        if(actualItem == "x") {
             result = calc.multiplication(upperValueArray[i-1], upperValueArray[i+1])
        //Faz a divisão
        } else if(actualItem == "/") {
            result = calc.division(upperValueArray[i-1], upperValueArray[i+1])
         // checa se o array ainda tem multiplicação e divisão a ser feita
        } else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
            //soma e subtração
        //Faz a soma
        if(actualItem == "+") {
            result = calc.sum(upperValueArray[i-1], upperValueArray[i+1])
        }
        //Faz a subtração
        } else if(actualItem == "-") {
            result = calc.subtraction(upperValueArray[i-1], upperValueArray[i+1])
        }

```
*faz o controle da ordem de como realizar as operações matemáticas...*

- Acrescentar operation = 1 para dizer que foi realizado a operação

```javascript


        if(actualItem == "x") {
            result = calc.multiplication(upperValueArray[i-1], upperValueArray[i+1])
            operation = 1;
        } else if(actualItem == "/") {
            result = calc.division(upperValueArray[i-1], upperValueArray[i+1])
            operation = 1;
        } else if(!upperValueArray.includes('x') && !upperValueArray.includes('/')) {
            if(actualItem == "+") {
                result = calc.sum(upperValueArray[i-1], upperValueArray[i+1])
        }       operation = 1;
        } else if(actualItem == "-") {
            result = calc.subtraction(upperValueArray[i-1], upperValueArray[i+1])
            operation = 1;
        }

```

- Quando ele realizar a operção ele irá incrementar esse operation para 1, e sempre que o loop recomeça o operation fica novamente com valor 0;
- E com o operation nos if's ele entra no if:

```javascript

        // atualiza valores do array para a proxima interação
        if(operation) {
            //indice anterior no resultado da operação
            upperValueArray[i - 1] = result
            // remove os itens já utilizados para a operação
            upperValueArray.splice(i, 2);
            //atualizar o valor do índice
            i = 0;
        }

```

## Correção de bug

- Quando inicia por um simbolo, e tenta fazer algum tipo de conta, ele retorna NaN

- Criar mais um check através do if

```javascript

        if(upperValue == 0) {
            // testar se É um numero
            if(reg.test(input)){
                calc.upperValue.textContent = input;
            }
        } else {
            calc.upperValue.textContent += input;
        }

```











