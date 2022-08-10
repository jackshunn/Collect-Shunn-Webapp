import React from "react";
import movieIcon from "../images/film-solid.svg";
import bookIcon from "../images/book-solid.svg";
import songIcon from "../images/music-solid.svg";

export default function SearchIconToggle(props){
    function toggleType(type){
        props.setSearchTypes((prev) => {
            let prevTypes = {...prev};
            prevTypes[type] = !prevTypes[type];
            return prevTypes;
        });
    }
    
    return (
        <div className="flex gap-1">
            <div className={props.movies ? "bg-white p-0.5 rounded-lg" : ""}>
               <img src={movieIcon} alt="Movie" className="h-6" onClick={() => toggleType("movies")}/>
            </div>
            <div className={props.books ? "bg-white p-0.5 rounded-lg" : ""}>
                <img src={bookIcon} alt="Book" className="h-6" onClick={() => toggleType("books")}/>
            </div>
            <div className={props.songs ? "bg-white p-0.5 rounded-lg" : ""}>
                <img src={songIcon} alt="Song" className="h-6" onClick={() => toggleType("songs")}/>
            </div>
        </div>
    )
}