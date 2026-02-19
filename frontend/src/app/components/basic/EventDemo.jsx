'use client'

function ClickHandler() {
    console.log("clickHandler");
}

export default function EventDemo() {
    return (
        <div>
            <h3>Event Demo</h3>
            <button type={"button"} onClick= {ClickHandler}>
                Click Me
            </button>
        </div>)
}