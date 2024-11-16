// Selecionando os elementos necessários
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

// Adicionando um evento de clique ao botão "Adicionar"
addTaskBtn.addEventListener('click', addTask);

// Função para adicionar uma nova tarefa à lista
function addTask() {
    const taskText = newTaskInput.value.trim(); // Pegando o valor do campo de input

    if (taskText !== '') {
        const li = document.createElement('li'); // Criando um novo elemento de lista
        li.textContent = taskText;

        // Criando botão de deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Remove a tarefa quando clicar no botão "X"
        });

        li.appendChild(deleteBtn); // Adicionando o botão de deletar ao item da lista
        taskList.appendChild(li); // Adicionando o item da lista ao UL
        newTaskInput.value = ''; // Limpando o campo de input
    } else {
        alert('Digite uma tarefa antes de adicionar!');
    }
}
