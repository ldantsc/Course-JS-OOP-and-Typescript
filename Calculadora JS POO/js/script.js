class Calculator {

    constructor() {
        /*iniciando os valores zerado*/
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        /*quando deve ser resetado a operação*/
        this.reset = 0;
    }

    //método para resetar os valores para 0
    clearValues() {
        this.upperValue.textContent = "0";
        this.resultValue.textContent = "0";
    }

    // ele serve para não adicionar outro simbolo após a inclusão de um simbolo
    checkLastDigit(input, upperValue, reg) {

        if((
            !reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
            return true
        }   else {
            return false
        }

    }

    btnPress() {
        // textContent pega o texto dentro do botão, guardando na variavel input 
        let input = this.textContent;
        // pegar o upperValue pra precisar mudar caso um numero ou simbolo for adicionado
        let upperValue = calc.upperValue.textContent;
        // verificar se tem só numeros | expressão regular
        var reg = new RegExp('^\\d+$');
        
        // checar antes se o input = AC para limpar a tela 
        if (input === "AC") {

            //invocando o método clearValues -- Limpar o display 
            calc.clearValues();

        } else {
        //checa se precisa adicionar ou não (para tratar os simbolos que estão sendo adicionados no input)        
        if(calc.checkLastDigit(input, upperValue, reg)) {
            return false;
        }

        //adicionar espaço aos operadores
        //reject.testar input
        //se não cair no reg ele é um operador, caso if, input adiciona 2 espaços
        if(!reg.test(input)) {
            input = ` ${input} `
        }
        
        // tratando o upperValue
        if(upperValue == 0) {
            // upperValue vai ser igual ao input
            calc.upperValue.textContent = input;
        } else {
            calc.upperValue.textContent += input;
        }
        }
    }
}

//start object 

let calc = new Calculator

console.log(calc)

//start buttons

let buttons = document.querySelectorAll('.btn')

console.log(buttons)

//map all btns

for(let i = 0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress)
}