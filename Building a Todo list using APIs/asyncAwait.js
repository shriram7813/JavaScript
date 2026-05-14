let tasks = [];

const taskList = document.getElementById('list');
const tasksCounter = document.getElementById('tasks-counter');
const addTaskInput = document.getElementById('add');

async function fetchTodos() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks = data.slice(0,10);
    renderList();
    } catch (error) {
    console.log(error);
    }
}

function addTaskToDOM(task) {
    const li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" class="custom-checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}>
    <label for="${task.id}"> ${task.title} </label>
    <img src="trash_1086991.png" data-id="${task.id}" class="delete"/>
    `

    taskList.append(li);
}

function renderList() {
    taskList.innerHTML = '';

    for (let i=0; i<tasks.length; i++) {
        addTaskToDOM(tasks[i]);
    }
}

function addTask(task) {
    if(task) {
        tasks.push(task);
        renderList();
        showNotification('Task has been added successfully!!');
        return;
    }

    showNotification('Task cannot be added!!');
    return;
}

function deleteTask(taskId) {
    const newTask = tasks.filter((task)=>{
        return task.id!==Number(taskId);
    });

    tasks = newTask;
    renderList();
    showNotification('Task deleted successfully!!');
    return;
}

function toggleTask(taskId) {
    const latestTask = tasks.filter((task)=>{
        return task.id===Number(taskId);
    });

    if(latestTask.length>0) {
        const currentTask = latestTask[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification('Task toggled successfully!!');
        return;
    }

    showNotification('Task could not be toggled!!');
    return;
}

function showNotification(text) {
    window.alert(text);
}

function handleInputKeyPress(e) {
    if(e.key=='Enter') {
        const text = e.target.value;

        if(!text) {
            showNotification('Task Input cannot be Empty!!');
            return;
        }

        const task = {
            title: text,
            id: Date.now(),
            completed: false,
        };

        e.target.value='';
        addTask(task);
    }
}

function handleClickListener(e) {
    const target = e.target;

    if(target.className==='delete') {
        const targetId = target.dataset.id;
        deleteTask(targetId);
        return;
    } else if(target.className==='custom-checkbox') {
        const targetId = target.id;
        toggleTask(targetId);
        return;
    }
}


function initializeApp() {
fetchTodos();
addTaskInput.addEventListener('keyup', handleInputKeyPress);
document.addEventListener('click', handleClickListener);
}

initializeApp();