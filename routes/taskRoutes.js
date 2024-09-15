const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/taskControllers');

router.get('/', (req, res)=>{
    const tasks = taskControllers.getAllTasks();
    res.status(200).json(tasks);
});

router.post('/', (req, res)=>{
    const {title, description} = req.body;
    const newTask = taskControllers.createTask(title, description);
    res.status(200).json(newTask);
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const deletedTask = taskControllers.deleteTask(parseInt(id, 10));
    if (deletedTask) {
        res.status(200).json({ message: 'Tarea eliminada', task: deletedTask });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

router.put('/:id', (req, res)=>{
    const { id } = req.params;
    const { title, description} = req.body;
    const updatedTask = taskControllers.updateTask(parseInt(id, 10), title, description);
    if (updatedTask) {
        res.status(200).json({ message: 'Tarea actualizada', task: updatedTask });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = taskControllers.getOneTask(parseInt(id, 10));
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Tarea no enccontrada' });
    }
});

module.exports = router;