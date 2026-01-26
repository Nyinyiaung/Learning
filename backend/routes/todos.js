const express = require('express');
const Todo = require("../models/Todo")
const todoController = require("../controllers/TodoController");

const router = express.Router();

router.get('/', todoController.getTodos);

router.post('/', todoController.createTodo);

router.get('/:id', todoController.getTodoById)

router.put('/:id', todoController.updateTodo)

router.delete('/:id', todoController.deleteTodo);

module.exports = router;