import React from "react";

export default function MovieSearchItem(props){

    function addItemToList(){
        props.addItemCallback({
            "comment": "",
            "type": "movie",
            "title": props.title,
            "text": props.text,
            "movie": {
                "year": props.year,
                "link": props.link,
                "image": props.image
            },
            "date": new Date().toISOString().substring(0,10)
        })
    }

    return (
        <div className="border border-black flex p-4 rounded-xl h-min">
            <div className="flex flex-col items-center w-32 mr-4">
                <div className="w-32"><img src={props.image} alt="Failed to load poster" className="max-h-44 m-auto"/></div>
                <span className="text-customColor-lightGrey text-lg">{props.year}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-customColor-orange text-lg">{props.title}</span>
                <textarea disabled={true} className="bg-transparent resize-none hover:resize-y text-white text-md h-36 w-80" value={props.text}></textarea>
                <div className="flex">
                    <div className="flex-1"/>
                    <div onClick={addItemToList} className="bg-customColor-orange text-customColor-darkBlue text-xl rounded-xl w-min px-1 mr-5">Add</div>
                </div>
            </div>
        </div>
    )
}