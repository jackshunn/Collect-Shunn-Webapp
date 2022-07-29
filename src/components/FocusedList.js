import React from "react";



export default function FocusedList(props) {
    function handleChange(event){
        props.handleChangedData(event.target.value)
    }

    function handleInsideClick(event){
        event.stopPropagation();
    }
    return (
    <div className="py-9 rounded-lg  bg-customColor-lightBlue flex flex-col" onClick={handleInsideClick}>
        <span className="mx-20 font-bold text-2xl text-customColor-orange">{props.data}</span>
        <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex">
            <span></span>
            <input type="text" className="flex-1 bg-transparent text-white text-xl" value={props.data} onChange={handleChange}></input>
            <span className="h-11 w-1 bg-customColor-orange"></span>
            <input type="date" className="bg-transparent text-white text-xl"></input>
        </div>

    </div>
  );
}