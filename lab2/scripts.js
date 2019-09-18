/* array containing all tasks */
var tasks = [];
/* number of selected tasks to determine whether button is red or black */
var numSelected = 0;

/* constructor for a task */
function Task(title, text) {
    this.id = tasks.length;
    this.title = title;
    this.text = text;
    this.selected = false;
}

/* handles creation of a task card */
let submit = document.getElementById('submitButton');
submit.addEventListener('click', () => {
    let title = document.getElementById('titleInput').value;
    let text = document.getElementById('inputArea').value;
    tasks.unshift(new Task(title, text));
    updateTasks(tasks);
});

/* handles search queries and returns card with title that contains query */
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

/* deletes selected tasks */
let deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.selected);
    updateTasks(tasks);
})

/* update the task list with a new card and add event listener */
function updateTasks(list) {
    clearTasks();
    let taskBar = document.getElementById('notecardList');
    list.forEach( task => {
        taskBar.appendChild(createCard(task));
    });

    let selected = taskBar.childNodes;
    selected.forEach( card => {
        card.addEventListener('click', () => {
            if (card.className == 'card') {
                card.className = 'card text-white bg-danger';
                tasks.filter(task => task.id == card.id).map(task => task.selected = true);
                numSelected += 1;
            }
            else {
                card.className = 'card';
                tasks.filter(task => task.id == card.id).map(task => task.selected = false);
                numSelected -= 1;
            }

            let button = document.getElementById('deleteButton');
            if (numSelected == 0) {
                button.className = 'btn btn-outline-dark';
            }
            else {
                button.className = 'btn btn-outline-danger';
            }
        });
    });
}

/* reset task list to nothing (super efficient) */
function clearTasks() {
    let taskBar = document.getElementById('notecardList');
    while (taskBar.firstChild) {
        taskBar.removeChild(taskBar.firstChild);
    }
}

/* create a card to add to task list */
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
    newTask.id = task.id;

    return newTask;
}
