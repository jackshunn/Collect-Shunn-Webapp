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
                <div className="text-white text-lg mx-auto">List Title:</div>
                <ResizeTextBox className="mx-auto border border-black text-black text-lg bg-transparent min-w-[100px] rounded-lg" value={title} onChange={(event) => setTitle(event.target.value)} onKeyDown={handleKeyPress}/>
                {displayError && <div className="mx-auto text-red-600 text-sm">Title cannot be empty</div>}
                </>

            :
                <img src={plusIcon} alt="Add New List" className="block mx-auto w-1/2 min-h-full"/>
            }
            
        </div>
    )
}