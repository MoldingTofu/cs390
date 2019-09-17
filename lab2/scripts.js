var tasks = [];

let submit = document.getElementById('submitButton');
submit.addEventListener('click', () => {
    let title = document.getElementById('titleInput').value;
    let text = document.getElementById('inputArea').value;
    tasks.unshift(new Task(title, text));
    updateTasks(tasks);
});

let search = document.getElementById('searchBar');
search.addEventListener('input', e => {
    let query = search.value.trim()
    if (query) {
        let filtered = tasks.filter(task => task.title.includes(query));
        updateTasks(filtered);
    }
    else {
        updateTasks(tasks);
    }
});

if (tasks.length) {
    let selected = document.getElementById('task');
    selected.addEventListener('click', () => {
        let task = selected.value;
        console.log(task);
    });
}

function Task(title, text) {
    this.title = title;
    this.text = text;
}

function updateTasks(list) {
    clearTasks();
    let taskBar = document.getElementById('notecardList');
    list.forEach( task => {
        taskBar.appendChild(createCard(task));
    });
}

function clearTasks() {
    let taskBar = document.getElementById('notecardList');
    while (taskBar.firstChild) {
        taskBar.removeChild(taskBar.firstChild);
    }
}

function createCard(task) {
    let taskBar = document.getElementById('notecardList');
    let newTask = document.createElement('div');
    let title = document.createElement('h1');
    let text = document.createElement('h2');

    title.innerHTML = task.title;
    text.innerHTML = task.text;
    newTask.className = 'card';
    newTask.appendChild(title);
    newTask.appendChild(text);
    newTask.id = 'task';

    return newTask;
}
