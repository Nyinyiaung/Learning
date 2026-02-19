'use client';

import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    let increment = () => {
        console.log("Increment counter: " + count);
        setCount(count + 1);
    }

    let decrement = () => {
        console.log("Decrement counter: " + count);
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
        </div>
    )
}