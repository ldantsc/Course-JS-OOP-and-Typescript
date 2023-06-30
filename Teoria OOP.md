# Objetos

- A representação de uma Classe;
- Fundamental para a Orientação a Objetos;
- Tem propriedades que representam as características de um objeto;
- Tem métodos que representam as ações de um objeto;

```javascript

let obj = {
    name: 'user'
}

```


## Classes

- É como se fosse o molde do objeto;
- Geralmente se criam diversos objetos da mesma classe;
- Normalmente já possui as propriedades e métodos que os objetos vão utilizar;
- A Classe no Javascript foi introduzida na versão ES6




```javascript

class Classname {
    constructor() {

    }
}

```


```javascript

class Carro {
    constructor(marca, ano){
        this.marca: marca,
        this.ano: ano
    }
}

```

## Encapsulamento

- Quando um objeto contém, ou encapsula, dados ou meios de fazer algo com os dados(usando métodos)
- Um outro aspecto da encapsulação é ter propriedades e métodos: públicos, privados ou protegidos;
- No JS não temos meios de forma nativa, tudo é publico
- Porém podemos contornar isso;

## Agregação (Aggregation)

- Também conhecido como composição (composition);
- O ato de combinar diversos objetos em um maior;
- isso serve para não termos um objeto muito grande e complexo

- Objeto Grande = SalaDeAula;
- Objeto com Aggregation = SalaDeAula com Aluno, Cadeira, Lousa, e etc.
- A sala de aula foi divida em diversos objetos, que cada um tem sua resposabilidade;

-Objeto Grande = Car;
-Objeto com Aggregation = class Car = object Engine, Seat, Wheel

## Herança (Inheritance)

- Quando um objeto ou classe deriva de uma outra classe;
- Podendo herdar suas propriedades e métodos;
- Fazendo com que você crie classes com o comportamento semelhante, porém para fins distintos;

## Polimorfismo (Polymorphism)

- É a possibilidade de utilizar um método de uma classe pai de uma maneira diferente;
- Que se adapte as necessidades do novo objeto, sem precisar alterar o método do objeto pai;
- Importante citar que o polimorfismo utiliza o conceito de herança


