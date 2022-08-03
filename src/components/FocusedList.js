import React from "react";
import Item from "./Item.js"

export default function FocusedList(props) {

    function handleItemChange(updatedItem, index){
        const newItems = props.list.items.map((item, i) => i !== index ? item : updatedItem);
        props.handleChange({
        ...props.list,
        items: newItems,
        })
    }

    function handleInsideClick(event){
        event.stopPropagation();
    }

    function generateItems(){
        return props.list.items.map( (value, index) => {
            return (
                <div className="flex flex-1" key={index}>
                    <span className="text-white text-xl my-auto ml-5">{index+1}.</span>
                    <Item item={value} handleChange={(updatedItem) => handleItemChange(updatedItem, index)} /> 
                </div>
            )
        })
    }

    return (
    <div className="py-9 rounded-lg  bg-customColor-lightBlue flex flex-col flex-1" onClick={handleInsideClick}>
        <span className="mx-14 font-bold text-2xl text-customColor-orange">{props.list.title}</span>
        <div className="flex flex-col">
            {generateItems()}
        </div>
        
    </div>
  );
}