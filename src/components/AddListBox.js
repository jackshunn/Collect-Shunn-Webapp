import plusIcon from "../images/plus.svg";
import React, {useState} from "react";
import ResizeTextBox from "./ResizeTextBox";

export default function AddListBox(props){
    const [title, setTitle] = useState("");
    const [displayError, setDisplayError] = useState(false);
    const [hovering, setHovering] = useState(false);

    function handleKeyPress(event){
        if(event.key !== "Enter")
            return;
        
        if(event.target.value === ""){
            setDisplayError(true);
            return;
        }
        setDisplayError(false);
        props.addNewList(event.target.value);
    }

    function handleClick(){
        if(!hovering)
            setHovering(true)
    }

    return (
        <div onClick={handleClick} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='border-2 rounded-lg justify-center h-96 bg-customColor-lightBlue min-w-min flex flex-col'>
            {(title !== "" || hovering) 
            ?
                <>
                <div className="text-white text-4xl mx-auto">New List Title:</div>
                <ResizeTextBox className="mx-auto border border-black text-customColor-orange text-4xl text-center bg-transparent min-w-[100px] rounded-lg " value={title} onChange={(event) => setTitle(event.target.value)} onKeyDown={handleKeyPress}/>
                {displayError && <div className="mx-auto text-red-600 text-sm">Title cannot be empty</div>}
                </>

            :
                <img src={plusIcon} alt="Add New List" className="block mx-auto w-1/3 min-h-full"/>
            }
            
        </div>
    )
}