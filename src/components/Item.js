import React, {useState} from "react";
import dropDownArrow from "../images/angle-right-solid.svg"
import MovieItem from "./item-types/MovieItem.js"
import BookItem from "./item-types/BookItem.js"
import SongItem from "./item-types/SongItem.js"
import TextItem from "./item-types/TextItem.js"

export default function Item(props) {
    const [expanded, setExpanded] = useState(false);

    function handleItemChange(event, propName){
        props.handleChange(
        {
            ...props.item,
            [propName]: event.target.value
        });
    }

    function itemSwitch(){
        switch(props.item.type) {
            case "movie":
                return <MovieItem item={props.item} handleChange={props.handleChange}/>;
            case "book":
                return <BookItem item={props.item} handleChange={props.handleChange}/>;
            case "song":
                return <SongItem item={props.item} handleChange={props.handleChange}/>;
            case "text":
                return <TextItem item={props.item} handleChange={props.handleChange}/>;
            default:
                throw new Error("Item type was unexpected")
        }
    }

    if(expanded){
        return (
            <div className="flex-1 m-5 rounded-xl h-auto bg-customColor-darkBlue flex relative">
                <img src={dropDownArrow} alt=">" onClick={() => setExpanded(prev => !prev)} className="h-9 absolute top-1"/>
                {itemSwitch()}
            </div>
        )
    }
    else{
        return (
            <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex relative">
                <img src={dropDownArrow} alt=">" onClick={() => setExpanded(prev => !prev)} className="h-9 absolute top-1"/>
                <input type="text" className="flex-1 bg-transparent text-white text-xl mr-3 ml-6" onChange={(event) => handleItemChange(event, "title")} value={props.item.title}></input>
                <span className="h-11 w-1 bg-customColor-orange"/>
                <input type="text" className="flex-1 bg-transparent text-customColor-lightGrey text-xl mx-3" onChange={(event) => handleItemChange(event, "text")} value={props.item.text}></input>
                <span className="h-11 w-1 bg-customColor-orange"/>
                <input type="date" className="bg-transparent text-white text-xl mx-3" onChange={(event) => handleItemChange(event, "date")} value={props.item.date}></input>
            </div>
        )
    }

}