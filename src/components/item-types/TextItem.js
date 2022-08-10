import React, {useState} from "react";
import commentBubble from "../../images/comment-dots-solid.svg"

export default function TextItem(props){
    const [expandComment, setExpandComment] = useState(props.item.comment !== "");

    function handleItemChange(event, propName){
        props.handleChange(
        {
            ...props.item,
            [propName]: event.target.value
        });
    }

    return (
        <div className="flex-1 flex flex-col mb-3">
            <div className="flex flex-1 ml-3 min-h-[44px]">
                <input placeholder="~no title~"value={props.item.title} onChange={(event) => handleItemChange(event, "title")} className="min-w-[32px] max-w-full bg-transparent inline-block flex-1 text-white text-xl mr-3 ml-6"/>
                <input type="date" value={props.item.date} onChange={(event) => handleItemChange(event, "date")} className="bg-transparent text-white text-xl px-3 border-l-4 border-b-4 border-customColor-orange"/>
            </div>
            <div className="flex mx-5">
                <div className="flex flex-col flex-1 ml-3">
                    <textarea value={props.item.text} onChange={(event) => handleItemChange(event, "text")} className="flex-1 resize-none bg-transparent text-white text-xl"/>
                    {!expandComment &&
                        <div className="flex" onClick={() => setExpandComment(prev => !prev)}>
                            <img src={commentBubble} alt="" className="h-6"/>
                            <span className="mx-2 text-customColor-lightGrey text-xl">Comment...</span>
                            <div className="flex-1"></div>                        </div>
                    }
                    {expandComment &&
                        <div className="flex flex-col">
                            <div className="flex my-2">
                                <img src={commentBubble} alt="" className="h-6"/>
                                <span className="mx-2 text-customColor-lightGrey text-xl ">Comment</span>
                                <div className="flex-1"></div>
                            </div>
                            <textarea onChange={(event) => handleItemChange(event, "comment")} className="resize-none bg-transparent border border-black rounded-md text-white text-xl" value={props.item.comment}></textarea>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}