import React, {useState} from "react";
import dropDownArrow from "../images/angle-right-solid.svg"
import MovieItem from "./item-types/MovieItem.js"
import BookItem from "./item-types/BookItem.js"
import SongItem from "./item-types/SongItem.js"
import TextItem from "./item-types/TextItem.js"

export default function Item(props) {
    const [expanded, setExpanded] = useState(false);

    function itemSwitch(){
        switch(props.item.type) {
            case "movie":
                return <MovieItem />;
            case "book":
                return <BookItem />;
            case "song":
                return <SongItem />;
            case "text":
                return <TextItem />;
            default:
                throw new Error("Item type was unexpected")
        }
    }

    if(expanded){
        return (
            <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex">
                <img src={dropDownArrow} alt=">" onClick={() => setExpanded(prev => !prev)}/>
                {itemSwitch()}
            </div>
        )
    }
    else{
        return (
            <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex">
                <img src={dropDownArrow} alt=">" onClick={() => setExpanded(prev => !prev)}/>
                <input type="text" className="flex-1 bg-transparent text-white text-xl mx-3" value={props.item.title}></input>
                <span className="h-11 w-1 bg-customColor-orange"/>
                <input type="text" className="flex-1 bg-transparent text-customColor-lightGrey text-xl mx-3" value={props.item.text}></input>
                <span className="h-11 w-1 bg-customColor-orange"/>
                <input type="date" className="bg-transparent text-white text-xl mx-3" value={props.item.date}></input>
            </div>
        )
    }

}