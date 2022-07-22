import "../styles/Main.css"
import List from './List.js'
import FocusedList from "./FocusedList";
import {getData} from "../data"
import React, {useState, useEffect} from 'react'

export default function Main(){
    const [focusedList, setFocusedList] = useState(-1);
    const [lists, setLists] = useState([])

    useEffect( () => async ()=> {
        const data = await getData();
        setLists(data)
    }, [])

    function handleClick(index) {
        setFocusedList(index)
    }

    function handleChangedData(index, change) {
        setLists(prev => prev.map((item, i) => i !== index ? item : change))
    }

    function getLists(){
        return lists.map( (title, index) => <List key={index} title={title} handleClick={(event) => {
            handleClick(index)
            event.stopPropagation()}}/>);
    }

    function handleOutsideClick(){
        setFocusedList(-1)
    }

    return (
        <main className='p-16' onClick={handleOutsideClick}>
            {focusedList === -1 ? 
                (<div className="flex flex-wrap gap-16">
                    {getLists()}
                </div>) :
                <FocusedList data={lists[focusedList]} handleChangedData={(change) => handleChangedData(focusedList, change)}/>
            }

        </main>
    )
}