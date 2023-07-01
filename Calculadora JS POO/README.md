# Projeto Calculadora POO

- Iniciando configuração do projeto construindo e configurando os arquivos html, css, js

- Html adicionando id's diferentes para executar botoes individualmente no JS, números será usado classes pois com o textContent pegamos o valor/conteudo dentro da tag de cada botão

- Estilização no CSS (Atento ao uppernumber, pois com a estilização dele não faz os números ele sair para fora da div)

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

*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr*
*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test*

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










