import React, {useState} from "react";



export default function FocusedList(props) {
    const [list, setList] = useState(props.list)

    function handleChange(event){
        props.handleChangedData({title:"Title1",items:[{text:event.target.value}]})
    }

    function handleInsideClick(event){
        event.stopPropagation();
    }
    return (
    <div className="py-9 rounded-lg  bg-customColor-lightBlue flex flex-col flex-1" onClick={handleInsideClick}>
        <span className="mx-14 font-bold text-2xl text-customColor-orange">{props.list.title}</span>
        <div className="flex">
            <span className="text-white text-xl my-auto ml-5">1.</span>
            <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex">
                <input type="text" className="flex-1 bg-transparent text-white text-xl mx-3" value={props.list.items[0].text} onChange={handleChange}></input>
                <span className="h-11 w-1 bg-customColor-orange"/>
                <input type="date" className="bg-transparent text-white text-xl mx-3"></input>
            </div>
        </div>
        
    </div>
  );
}