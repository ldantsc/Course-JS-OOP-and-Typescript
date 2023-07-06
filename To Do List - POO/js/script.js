// Criar a class Todo, matriz para os objetos/objeto

class Todo {

    // iniciar propriedades
    constructor() {
        //selecionar numero de tarefas do html, selecionar todas as tarefas e lenght quantos itens existem de cada tarefa
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    //elemento adicionar tarefas
    addTask(taskText) {
      // clonar o template
        
      let template = document.querySelector('.task').cloneNode(true);
      //remove class hide
      template.classList.remove('hide');
      //manipular texto
      let templateText = template.querySelector('.task-title');
      templateText.textContent = taskText

      //pegar a lista de tarefas

      let list = document.querySelector('#tasks-container');
      
      //inserir na lista
      list.appendChild(template); 

      //adiciona evento as tasks
      this.addEvents();
     
      this.checkTasks('add')

    }

    removeTask(task){
                // achar o elemento
                let parentEl = task.parentElement;
                //remover elemento
                parentEl.remove()

                this.checkTasks('remove')
    }

    completeTask(task){
        // adiciona a classe de done
        task.classList.add('done')
    }

    addEvents() {
        //ver a ultima task adicionada e vai adicionar os 2 eventos
        
        // pegando os botoes de remover
        let removeBtns = document.querySelectorAll('.fa-trash')
        // tendo acesso ao ultimo botão de remover adicionado na lista
        let removeBtn = removeBtns[removeBtns.length - 1];

        //complete task
        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length - 1];

        //adicionar evento de remover
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this)
        })

        //adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this)
        })
    }

    checkTasks(command) {

        let msg = document.querySelector('#empty-tasks');


        //lógica de adcionar ou remover tasks

        if(command === 'add') {
            this.totalTasks += 1;
        } else if(command === 'remove'){
            this.totalTasks -= 1;
        }

        //checa se tem mais de uma task e adiciona ou remove a classe
        if(this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide');
        }   

    }
}


//instanciar a classe para utilizar os métodos dela
let todo = new Todo();

//events

let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e) {
    // função para o botão não enviar/submit formulário
    e.preventDefault();
    
    //pegar o texto do input
    let taskText = document.querySelector('#task')

    //enviando o texto do input para o método addTask
    if(!taskText.value == '') {
        todo.addTask(taskText.value);        
    } else {
        alert('Preencha o campo de tarefas')
    }

    //limpar campo de texto
    taskText.value = ''
})

