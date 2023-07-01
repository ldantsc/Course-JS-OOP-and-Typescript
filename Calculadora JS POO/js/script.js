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

    //atualiza valores
    refreshValues(total) {
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }

    // resolve a operação
    resolution() {
       // explode uma string em um array 
        let upperValueArray = (this.upperValue.textContent).split(" ")       
        let result = 0;
        
        for(let i = 0; i <= upperValueArray.length; i++){
            
            //percorrer o array
         let actualItem = upperValueArray[i];
            
            // ADIÇÃO
         if(actualItem == "+") {
             result = parseFloat(upperValueArray[i - 1]) + parseFloat(upperValueArray[i + 1])
         }

         if(result) {
            calc.reset = 1;
         }
 
        }
        //atualizar os totais
        calc.refreshValues(result)

    }

    btnPress() {
        // textContent pega o texto dentro do botão, guardando na variavel input 
        let input = this.textContent;
        // pegar o upperValue pra precisar mudar caso um numero ou simbolo for adicionado
        let upperValue = calc.upperValue.textContent;
        // verificar se tem só numeros | expressão regular
        var reg = new RegExp('^\\d+$');
        
        //resetar o display após a operação feita
        if(calc.reset && reg.test(input)) {
            upperValue = "0";
        }

        //limpa a prop de reset
        calc.reset = 0;

        // checar antes se o input = AC para limpar a tela 
        if (input === "AC") {

            //invocando o método clearValues -- Limpar o display 
            calc.clearValues();

        } else if(input == '=') {

            calc.resolution()

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