import React from "react";

export default function MovieSearchItem(props){
    return (
        <div className="border border-black flex">
            <div className="flex flex-col items-center">
                <img src={props.image} alt="Failed to load poster" className="max-h-[180px] rounded"></img>
                <span className="text-white text-lg">{props.title}</span>
                <span className="text-customColor-lightGrey text-lg">{props.year}</span>
            </div>
            <div className="flex-col">
                <p className="text-white text-lg">{props.text}</p>
                <div className="bg-customColor-orange text-customColor-darkBlue text-xl rounded-xl self-end">Add</div>
            </div>
        </div>
    )
}