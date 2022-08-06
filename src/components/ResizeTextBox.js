import React from 'react'

export default function ResizeTextBox(props){

    const root = document.getElementById("root");
    const span = document.createElement("span");
    span.innerHTML = props.value;
    span.className = props.className;
    root.appendChild(span);
    const width = span.offsetWidth; 
    root.removeChild(span);

    return (
        <input type="text" {...props} style={{width: `${width+10}px`}}></input>
    )
}
