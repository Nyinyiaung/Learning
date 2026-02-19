'use client';
import {useState} from "react";
export default function ItemListWithState() {
    const [items, setItems] = useState(['Apple', 'Orange', 'Banana']);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input === '') {
            return;
        }

        setItems([...items, input]);
        setInput('');
    }

    const deleteItem = (text) => {
        setItems(items.filter(item => item !== text));
    }

    const updateItem = (text) => {
        setItems(items.map(item => item === text ? text + ' updated' : item));
    }

    return (
        <div>
            <input type={"text"} value={input} onChange={(e) => setInput(e.currentTarget.value)} />
            <button onClick={addItem}>Add Item</button>
            <ol>
                {items.map((item, index) => (
                    <div key={index}>
                        <li>{item}</li>
                        <button onClick={() => deleteItem(item)}>Delete</button>
                        &nbsp;
                        <button onClick={() => updateItem(item)}>Update</button>
                    </div>
                ))}
            </ol>
        </div>
    )
}