import React from 'react';
import trashIcon from "../images/circle-trash.svg";

export default function List(props){

    function handleDeleteClick(event){
        event.stopPropagation();
        props.handleDeleteList();
    }

    return (
        <div className='p-5 border-2 rounded-lg justify-center h-96 bg-customColor-lightBlue min-w-min relative' onClick={props.handleClick}>
            <span className="font-bold text-2xl text-customColor-orange">{props.title}</span>
            <img src={trashIcon} alt="delete" className="h-10 absolute bottom-1 right-1" onClick={handleDeleteClick}/>
        </div>
    )
}