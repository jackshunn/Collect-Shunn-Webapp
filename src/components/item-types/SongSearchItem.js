import React from "react";

export default function SongSearchItem(props){
    
    function addItemToList(){
        props.addItemCallback({
            "comment": "",
            "type": "song",
            "title": props.title,
            "text": "",
            "song": {
                "year": props.year.substring(0,4),
                "link": props.link,
                "image": props.image,
                "artist": props.artist,
                "album": props.album
            },
            "date": new Date().toISOString().substring(0,10)
        })
    }

    return (
        <div className="border border-black flex p-4 rounded-xl h-min min-w-[450px]">
            <div className="flex flex-col w-32 mr-4">
                <div className="w-48"><img src={props.image} alt="Failed to load poster" className="max-h-44"/></div>
                <div className="text-customColor-lightGrey text-lg">{props.year}</div>
            </div>
            <div className="flex flex-col ml-10">
                <div className="text-customColor-orange text-lg">{props.title}</div>
                <div className="text-customColor-lightGrey text-md">Artist: {props.artist}</div>
                <div className="text-customColor-lightGrey text-md">Album: {props.album}</div>
                <div className="flex-1"/>
                <div className="flex">
                    <div className="flex-1"/>
                    <div onClick={addItemToList} className="bg-customColor-orange text-customColor-darkBlue text-xl rounded-xl w-min px-1 mr-5">Add</div>
                </div>
            </div>
        </div>
    )
}