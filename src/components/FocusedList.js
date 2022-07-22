import "../styles/FocusedList.css"
import React from "react";



export default function FocusedList(props) {
    function handleChange(event){
        props.handleChangedData(event.target.value)
    }

    function handleInsideClick(event){
        event.stopPropagation();
    }
    return (
    <div className="border-2 rounded-lg p-36 focusedList" onClick={handleInsideClick}>
        <span className="text-3xl">{props.data}</span>
        <br/><br/>
        <input type="text" value={props.data} onChange={handleChange}></input>
    </div>
  );
}