import List from './List.js';
import saveIcon from "../images/floppy-disk-solid.svg";
import backArrow from "../images/arrow-left-long-solid.svg";
import FocusedList from "./FocusedList";
import getDataFromDB from "../functions/requestData.js";
import saveDataToDB from '../functions/saveData.js';
import React, {useState, useEffect} from 'react';
import AddListBox from './AddListBox.js';
import Spinner from './Spinner.js';


export default function Main(props){
    const [data, setData] = useState({id:"", lists:[]});
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const asyncFunc = async () => {
            let databaseData = await getDataFromDB(props.userID);
            setData(databaseData);
            setLoading(false);
        };
        asyncFunc();
    }, [props.userID])

    useEffect(() => {
        if(unsavedChanges){
            const alertUser = e => {
                e.preventDefault()
                e.returnValue = ''
            }
            window.addEventListener('beforeunload', alertUser)
            return () => {
            window.removeEventListener('beforeunload', alertUser)
            }
        }
    }, [unsavedChanges])

    function saveData(event){
        saveDataToDB(data);
        setUnsavedChanges(false);
        event.stopPropagation();
    }

    function addNewList(title){
        const numberOfListsBeforeAddingOne = data.lists.length;
        setData(prev => {
            return ({
                ...prev,
                lists: prev.lists.concat({
                    title:title,
                    items:[]
                }),
            })
        })
        setUnsavedChanges(true);
        props.setFocusedListIndex(numberOfListsBeforeAddingOne);
    }
    
    function handleClick(index) {
        props.setFocusedListIndex(index)
    }

    function handleChangedData(index, changedList) {
        setData(prev => {
            const newLists = prev.lists.map((list, i) => i !== index ? list : changedList)
            return ({
            ...prev,
            lists: newLists,
            })
        })
        setUnsavedChanges(true)
    }

    function handleDeleteList(index){
        setData(prev => {
            return ({
                ...prev,
                lists: prev.lists.filter((value, i) => index !== i),
            })
        })
        setUnsavedChanges(true);
    }

    function getLists(){
        let listComponents = data.lists.map( (list, index) => <List key={index} title={list.title} handleClick={(event) => {
            handleClick(index)
            event.stopPropagation()}}
            handleDeleteList={() => handleDeleteList(index)}/>
            );

        listComponents.push(
        <AddListBox key={"addbox" + listComponents.length} addNewList={addNewList}/>);
        return listComponents;
    }

    function handleOutsideClick(){
        props.setFocusedListIndex(-1)
    }
    if(loading)
        return <div className='h-32 w-32 m-auto'><Spinner /></div>

    return (
        <main className='flex-1 flex relative' onClick={handleOutsideClick}>
            {props.focusedListIndex === -1 ? 
                <div className="flex-1 m-16 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-16">
                    {getLists()}
                </div> :
                <>
                <div className='p-16 flex-1 flex w-screen'>
                    <FocusedList 
                    list={data.lists[props.focusedListIndex]} 
                    handleChange={(updatedList) => handleChangedData(props.focusedListIndex, updatedList)}
                    />
                </div>
                <div className="h-12 absolute top-3 left-3 bg-customColor-orange p-1.5 rounded-2xl">
                    <img className="h-full" src={backArrow} alt="<-"/>
                </div>
                </>
            }
            {unsavedChanges && 
                <div  onClick={saveData} className="h-12 absolute top-3 right-3 bg-customColor-orange p-1.5 rounded-full">
                    <img className="h-full"src={saveIcon} alt="SAVE WORK"/>
                </div>
            }
        </main>
    )
}