'use client'
import './tab.css'
import {useState} from "react";

function TabHeader({header, onClick, isActive}) {
    let className = "tab-header";
    className += isActive ? ' active' : '';

    return <span className={className} onClick={onClick}>
                        {header}
                    </span>;
}

function TabContent({content}) {
    return <div className="tab-content">{content}</div>;
}

export default function Tabs({headers, children}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            {
                headers.map((header, index) => (
                    <TabHeader key={index} onClick={() => setActiveIndex(index)} header={header}
                    isActive={index === activeIndex}/>
                ))
            }

            <TabContent content={children[activeIndex]}/>
        </div>
    )
}