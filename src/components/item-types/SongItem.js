import React, {useState} from "react";
import commentBubble from "../../images/comment-dots-solid.svg"
import ResizeTextBox from "../ResizeTextBox";

export default function SongItem(props){
    const [expandComment, setExpandComment] = useState(props.item.comment !== "");

    function handleItemChange(event, propName){
        props.handleChange(
        {
            ...props.item,
            [propName]: event.target.value
        }
        )
    }

    function handleSongChange(event, propName){
        let newSong = {
            ...props.item.song,
            [propName]: event.target.value
        }
        props.handleChange(
        {
            ...props.item,
            song: newSong 
        }
        )
    }



    return (
        <div className="flex-1 flex flex-col mb-3">
            <div className="flex flex-1 min-h-[44px] items-center text-customColor-lightGrey text-xl">
                <ResizeTextBox value={props.item.title} onChange={(event) => handleItemChange(event, "title")} className="min-w-[32px] max-w-full bg-transparent inline-block text-center text-white text-xl ml-6"/>
                <ResizeTextBox value={props.item.song.year} onChange={(event) => handleSongChange(event, "year")} className="w-14 bg-transparent text-center text-customColor-lightGrey text-xl mr-3"/>
                <span>Song by</span>
                <ResizeTextBox value={props.item.song.artist} onChange={(event) => handleSongChange(event, "artist")} className="w-14 bg-transparent text-center text-customColor-lightGrey text-xl"/>
                <div className="flex-1"></div>
                <a className="text-xl text-blue-700 underline mx-3" href={props.item.song.link}>Link</a>
                <input type="date" value={props.item.date} onChange={(event) => handleItemChange(event, "date")} className="bg-transparent text-white text-xl px-3 border-l-4 border-b-4 border-customColor-orange"/>
            </div>
            <div className="flex mx-5">
                <img src={props.item.song.image} alt={props.item.title + " poster"} className="max-h-32 rounded-sm"/>
                <div className="flex flex-col flex-1 ml-3">
                    {!expandComment ?
                        <div className="flex mx-5 my-2" onClick={() => setExpandComment(prev => !prev)}>
                            <img src={commentBubble} alt="" className="h-6"/>
                            <span className="mx-2 text-customColor-lightGrey text-xl">Comment...</span>
                        </div>
                        :
                        <div className="mx-5 flex flex-col">
                            <div className="flex my-2">
                                <img src={commentBubble} alt="" className="h-6"/>
                                <span className="mx-2 text-customColor-lightGrey text-xl ">Comment</span>
                            </div>
                            <textarea onChange={(event) => handleItemChange(event, "comment")} className="resize-none bg-transparent border border-black rounded-md text-white text-xl" value={props.item.comment}></textarea>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}