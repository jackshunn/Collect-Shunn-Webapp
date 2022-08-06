import React from "react";
import Item from "./Item.js"
import ResizeTextBox from "./ResizeTextBox.js";
import AddNewItem from "./AddNewItem.js"

export default function FocusedList(props) {

    function handleItemChange(updatedItem, index){
        const newItems = props.list.items.map((item, i) => i !== index ? item : updatedItem);
        props.handleChange({
        ...props.list,
        items: newItems,
        })
    }

    function handleNewItem(newItem){
        const newList = {...props.list};
        newList.items.push(newItem);
        props.handleChange(newList);
    }

    function handleTitleChange(event){
        props.handleChange({
        ...props.list,
        title: event.target.value
        })
    }

    function handleInsideClick(event){
        event.stopPropagation();
    }

    function generateItems(){
        return props.list.items.map( (value, index) => {
            return (
                <div className="flex flex-1" key={index}>
                    <span className="text-white text-xl mt-7 ml-5">{index+1}.</span>
                    <Item item={value} handleChange={(updatedItem) => handleItemChange(updatedItem, index)} /> 
                </div>
            )
        })
    }

    return (
    <div className="py-9 rounded-lg  bg-customColor-lightBlue flex flex-col flex-1" onClick={handleInsideClick}>
        <ResizeTextBox className="mx-14 font-bold text-2xl text-customColor-orange bg-transparent" value={props.list.title} onChange={handleTitleChange}/>
        <div className="flex flex-col">
            {generateItems()}
            <div className="flex flex-1" >
                <span className="text-customColor-lightGrey text-xl mt-7 ml-5">...</span>
                <AddNewItem handleNewItem={handleNewItem}/>
            </div>
        </div>
    </div>
  );
}