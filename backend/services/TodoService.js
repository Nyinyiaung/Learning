const Todo = require("../models/Todo");

function getAllTodos() {
    return Todo.find();
}

function getTodoById(id) {
    return Todo.findById(id);
}

async function createTodo(todo) {
    let newTodo = new Todo(todo);
    return await newTodo.save();
}

function updateTodo(id, todo) {
    return Todo.findByIdAndUpdate(id, todo, {
        new: true
    });
}

function deleteTodo(id) {
    return Todo.findByIdAndDelete(id);
}

module.exports = {
    getAllTodos, createTodo, updateTodo, deleteTodo, getTodoById
};