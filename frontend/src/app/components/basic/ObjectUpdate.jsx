'use client'
import {useState} from "react";

export default function ObjectUpdate() {
    const [person, setPerson] = useState({
        name: "Nyi Nyi",
        age: 26,
    });

    const updateAge = () => {
        setPerson({
            ...person, age: person.age + 1
        });
    }

    return (
        <div>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>
            <button onClick={updateAge}>Update Age</button>
        </div>
    )
}