import React, {useState} from "react";
import commentBubble from "../../images/comment-dots-solid.svg"
import ResizeTextBox from "../ResizeTextBox";

export default function BookItem(props){
    const [expandComment, setExpandComment] = useState(props.item.comment !== "");

    function handleItemChange(event, propName){
        props.handleChange(
        {
            ...props.item,
            [propName]: event.target.value
        }
        )
    }

    function handleBookChange(event, propName){
        let newBook = {
            ...props.item.book,
            [propName]: event.target.value
        }
        props.handleChange(
        {
            ...props.item,
            book: newBook 
        }
        )
    }



    return (
        <div className="flex-1 flex flex-col mb-3">
            <div className="flex flex-1 min-h-[44px] items-center text-customColor-lightGrey text-xl">
                <ResizeTextBox value={props.item.title} onChange={(event) => handleItemChange(event, "title")} className="min-w-[32px] max-w-full bg-transparent inline-block text-center text-white text-xl mr-3 ml-6"/>
                <span>By</span>
                <ResizeTextBox value={props.item.book.author} onChange={(event) => handleBookChange(event, "author")} className="w-14 bg-transparent text-center text-customColor-lightGrey text-xl mx-3"/>
                <span>·</span>
                <ResizeTextBox value={props.item.book.year} onChange={(event) => handleBookChange(event, "year")} className="w-14 bg-transparent text-center text-customColor-lightGrey text-xl mx-3"/>
                <div className="flex-1"></div>
                <input type="date" value={props.item.date} onChange={(event) => handleItemChange(event, "date")} className="bg-transparent text-white text-xl px-3 border-l-4 border-b-4 border-customColor-orange"/>
            </div>
            <div className="flex mx-5">
                <img src={props.item.book.image} alt={props.item.title + " poster"} className="max-h-32 rounded-sm"/>
                <div className="flex flex-col flex-1 ml-3">
                    <span className="text-customColor-orange text-xl">Plot</span>
                    <textarea value={props.item.text} onChange={(event) => handleItemChange(event, "text")} className="flex-1 resize-none bg-transparent text-white text-xl"/>
                    <div className="text-customColor-orange text-xl mt-1">
                        Page Count: 
                        <ResizeTextBox value={props.item.book.pageCount} onChange={(event) => handleBookChange(event, "pageCount")} className="w-14 bg-transparent text-center text-white text-xl mx-3"/>
                    </div>
                    {!expandComment &&
                        <div className="flex" onClick={() => setExpandComment(prev => !prev)}>
                            <img src={commentBubble} alt="" className="h-6"/>
                            <span className="mx-2 text-customColor-lightGrey text-xl">Comment...</span>
                            <div className="flex-1"></div>
                            <a className="text-xl text-blue-700 underline" href={props.item.book.link}>Link</a>
                        </div>
                    }
                </div>
            </div>
            {expandComment &&
                <div className="mx-5 flex flex-col">
                    <div className="flex my-2">
                        <img src={commentBubble} alt="" className="h-6"/>
                        <span className="mx-2 text-customColor-lightGrey text-xl ">Comment</span>
                        <div className="flex-1"></div>
                        <a className="text-xl text-blue-700 underline" href={props.item.book.link}>Link</a>
                    </div>
                    <textarea onChange={(event) => handleItemChange(event, "comment")} className="resize-none bg-transparent border border-black rounded-md text-white text-xl" value={props.item.comment}></textarea>
                </div>
            }
        </div>
    )
}