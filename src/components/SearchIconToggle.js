import React from "react";
import movieIcon from "../images/film-solid.svg";
import bookIcon from "../images/book-solid.svg";
import songIcon from "../images/music-solid.svg";

export default function SearchIconToggle(props){
    return (
        <div className="flex gap-1">
            <div>All</div>
            <img src={movieIcon} alt="Movie" className="h-6"/>
            <img src={bookIcon} alt="Book" className="h-6"/>
            <img src={songIcon} alt="Song" className="h-6"/>
        </div>
    )
}