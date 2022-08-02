import List from './List.js'
import plusIcon from "../images/plus.svg"
import FocusedList from "./FocusedList";
import getData from "../data.js"
import React, {useState, useEffect} from 'react'

export default function Main(){
    const [focusedList, setFocusedList] = useState(-1);
    const [data, setData] = useState({user:"", lists:[]})


    useEffect( () => {
        const func = async ()=> {
            const data = await getData();
            console.log(data)
            setData(data)
            const body = {
                "keywords":"the batman",
                "movies":true,
                "books":true,
                "songs":true
            }
            const x =await fetch("/api/search",
            {
                method:"POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(body)
            })
            const y = await x.json()
            console.log(y)
        }

        func()
    }, [])

    function handleClick(index) {
        setFocusedList(index)
    }

    function handleChangedData(index, changedList) {
        setData(prev => {
            const newLists = prev.lists.map((list, i) => i !== index ? list : changedList)
            return ({
            ...prev,
            lists: newLists,
            })
        })
    }

    function getLists(){
        let listComponents = data.lists.map( (list, index) => <List key={index} title={list.title} handleClick={(event) => {
            handleClick(index)
            event.stopPropagation()}}/>
            );

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
                <div className="flex-1 m-16 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16">
                    {getLists()}
                </div> :
                <div className='m-16 flex-1 flex'>
                    <FocusedList list={data.lists[focusedList]} handleChangedData={(change) => handleChangedData(focusedList, change)}/>
                </div>
            }
        </main>
    )
}