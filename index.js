function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    const listaTarefas = document.getElementById('listaTarefas');

    if (novaTarefa) {
        const itemLista = document.createElement('li');
        itemLista.textContent = novaTarefa;
        listaTarefas.appendChild(itemLista);

        document.getElementById('novaTarefa').value = '';
    }
}