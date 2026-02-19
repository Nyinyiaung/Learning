'use client';

import {useEffect, useState} from "react";

export default function LoadTodo() {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json);
                setLoading(false);
            })
        .catch(error => setError(error));
    },[])
    return (
        <div>
            {
                loading && !error && <div>Loading...</div>
            }
            {
                error && <div>Error facing!</div>
            }
            {
                todos.map(td=> <div key={td.id}>{td.title}</div>)
            }
        </div>
    )
}