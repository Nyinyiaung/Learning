const todoService = require("../services/TodoService");

async function getTodos(req, res) {
    res.json(await todoService.getAllTodos());
}

async function getTodoById(req, res) {
    const id = req.params.id;
    try {
        let todo = await todoService.getTodoById(id);
        res.json(todo);
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function createTodo(req, res) {
    const todo = req.body;
    console.log(req.body);

    try {
        let newTodo = await todoService.createTodo(todo);
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function updateTodo(req, res) {
    let id = req.params.id;
    let todo = req.body;

    try {
        let updatedTodo = await todoService.updateTodo(id, todo);
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function deleteTodo(req, res) {
    let id = req.params.id;
    try {
        let deletedTodo = await todoService.deleteTodo(id);
        res.json(deletedTodo);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    getTodos, createTodo, updateTodo, deleteTodo, getTodoById
};