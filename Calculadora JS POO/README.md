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


