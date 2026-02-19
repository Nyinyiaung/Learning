'use client';
import {useState} from "react";

function Timer({time}) {
    return (
        <h3>Now: {time.toLocaleString()}</h3>
    );
}

export default function TimerDemo() {
    const [now, setNow] = useState(new Date());
    setInterval(() => {
        setNow(new Date());
    })
    return (
        <Timer time={now}/>
    );
}