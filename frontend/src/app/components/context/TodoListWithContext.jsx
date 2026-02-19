'use client';

import {useReducer} from "react";
import {TodoEntry, TodoItem} from "@/app/components/reducer/TodoList";

const initialTodos = [
    {
        id: 1,
        title: 'Task 1',
    },
    {
        id: 2,
        title: 'Task 2',
    },
    {
        id: 3,
        title: 'Task 3',
    }
]

function todoReducer(state, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            return state.map(todo=> todo.id === action.payload.id? action.payload: todo)
        case 'DELETE_TODO':
            return state.filter(todo=> todo.id !== action.payload.id);
    }
}

let id= 4;
export default function TodoListWithReducer() {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const addToDo = (todoText) => {
        let todo = {
            id: id++,
            title: todoText
        };

        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    const updateTodo = (todo) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: todo
        })
    }

    const deleteTodo = (todo) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todo
        })
    }

    return (
        <div>
            <TodoEntry addTodo={addToDo}/>
            {
                todos.map(todo=> <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
            }
        </div>
    )
}