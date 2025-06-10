// DEFINIR VARIAVEIS PARA USO NO CODIGO
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?");
titulo.innerHTML = `To-Do List: ${nome}`;

btnAdd.addEventListener("click", criaTarefa);

function criaTarefa(){
    const listitem = document.createElement('li');
    listitem.textContent = tarefa.value;
    taskList.appendChild(listitem);

    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "x";
    //listitem.appendChild(removeButton);

    removeButton.addEventListener("click", function(){
        taskList.removeChild(listitem);
    })

    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓";
    //listitem.appendChild(concluirButton);

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    listitem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    concluirButton.addEventListener("click", function(){
        listitem.classList.toggle('completed')
    })


}