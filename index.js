function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    const listaTarefas = document.getElementById('listaTarefas');

    if (novaTarefa) {
        const itemLista = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function () {
            itemLista.classList.toggle('concluida');
        };

        itemLista.appendChild(checkbox);
        itemLista.appendChild(document.createTextNode(novaTarefa));
        listaTarefas.appendChild(itemLista);

        document.getElementById('novaTarefa').value = '';
    }
}