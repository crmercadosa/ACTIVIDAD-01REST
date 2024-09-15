let tasks = [
    {
        id: 1, 
        title: "Tarea1",
        description: "Descripción de la Tarea 1"
    },
    {
        id: 2, 
        title: "Tarea2",
        description: "Descripción de la Tarea 2"
    },
    {
        id: 3, 
        title: "Tarea3",
        description: "Descripción de la Tarea 3"
    } 
]

function getAllTasks(){
    return tasks;
}

function createTask(title, description){
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
}

function deleteTask(id){
    const taskFound = tasks.findIndex(task => task.id === id);
    if (taskFound !== -1) {
        const deletedTask = tasks.splice(taskFound, 1);
        return deletedTask[0];
    }
    return null
}

function updateTask(id, title, description){
    const taskFound = tasks.findIndex(task => task.id === id);
    if (taskFound !== -1) {
        tasks[taskFound] = {id, title, description};
        return tasks[taskFound];
    }
    return null
}

function getOneTask(id) {
    return tasks.find(task => task.id === id) || null;
}


module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getOneTask
}