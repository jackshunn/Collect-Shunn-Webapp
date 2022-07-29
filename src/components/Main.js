import List from './List.js'
import plusIcon from "../images/plus.svg"
import FocusedList from "./FocusedList";
//import {getData} from "../data.js"
import React, {useState, /*useEffect*/} from 'react'

export default function Main(){
    const [focusedList, setFocusedList] = useState(-1);
    const [lists, setLists] = useState(["Title1","Title2","Title3","Title4"])

    // useEffect( () => async ()=> {
    //     const data = await getData();
    //     console.log(data)
    //     setLists(data)
    // }, [])

    function handleClick(index) {
        setFocusedList(index)
    }

    function handleChangedData(index, change) {
        setLists(prev => prev.map((item, i) => i !== index ? item : change))
    }

    function getLists(){
        let listComponents = lists.map( (title, index) => <List key={index} title={title} handleClick={(event) => {
            handleClick(index)
            event.stopPropagation()}}/>);

        listComponents.push(
        <div key={listComponents.length} className='border-2 rounded-lg justify-center h-96 bg-customColor-lightBlue min-w-min flex flex-col'>
            <img src={plusIcon} alt="Add New List" className="block mx-auto w-1/2 min-h-full"/>
        </div>);
        return listComponents;
    }

    function handleOutsideClick(){
        setFocusedList(-1)
    }

    return (
        <main className='flex-1 flex' onClick={handleOutsideClick}>
            {focusedList === -1 ? 
                (<div className="flex-1 m-16 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16">
                    {getLists()}
                </div>) :
                <div className='m-16 flex-1'>
                    <FocusedList data={lists[focusedList]} handleChangedData={(change) => handleChangedData(focusedList, change)}/>
                </div>
            }

        </main>
    )
}