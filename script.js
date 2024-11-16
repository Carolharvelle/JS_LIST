// Selecionando os elementos necessários
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

// Adicionando um evento de clique ao botão "Adicionar"
addTaskBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa pressionando a tecla "Enter"
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Função para adicionar uma nova tarefa à lista
function addTask() {
    const taskText = newTaskInput.value.trim(); // Pegando o valor do campo de input

    // Verifica se o campo não está vazio
    if (taskText !== '') {
        // Cria um novo item de lista
        const li = document.createElement('li');

        // Cria um span para o texto da tarefa
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Cria o botão de deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');

        // Adiciona a funcionalidade de remover ao clicar no botão
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Remove a tarefa quando clicar no botão "X"
        });

        // Adiciona o texto e o botão ao item da lista
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);

        // Adiciona o item completo à lista de tarefas
        taskList.appendChild(li);

        // Limpa o campo de input
        newTaskInput.value = '';
    } else {
        alert('Digite uma tarefa antes de adicionar!');
    }
}
