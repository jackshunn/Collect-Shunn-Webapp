import React, {useState} from "react";
import SearchIconToggle from "./SearchIconToggle";
import callSearchAPI from "../functions/search";
import MovieSearchItem from "./item-types/MovieSearchItem"
import BookSearchItem from "./item-types/BookSearchItem"
import SongSearchItem from "./item-types/SongSearchItem"

export default function AddNewItem(props){
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState();
    const [searchTypes, setSearchTypes] = useState({movies:true, books:false, songs:false})

        function searchOnEnterPressed(event){
            if (event.key === "Enter" && event.target.value){
                callSearchAPI(event.target.value, searchTypes, setSearchResults);
            }
        }

        function addNewTextItem(){
            props.handleNewItem({
                "comment": "",
                "type": "text",
                "title": title,
                "text": text,
                "date": new Date().toISOString().substring(0,10)
            })
            setExpanded(false);
            setTitle("");
            setText("");
        }

        function generateSearchResultComponents(searchResults) {
            let componentsList = [];
            for (const [key, value] of Object.entries(searchResults)) {
                if (key ==="imdb")
                    componentsList.push(...value.map((item, index) => <MovieSearchItem addItemCallback={props.handleNewItem} {...item} key={key + index}/>));
                if (key ==="googleBooks")
                    componentsList.push(...value.map((item, index) => <BookSearchItem addItemCallback={props.handleNewItem} {...item} key={key + index}/>));
                if (key ==="spotify")
                    componentsList.push(...value.map((item, index) => <SongSearchItem addItemCallback={props.handleNewItem} {...item} key={key + index}/>));
            }
            return componentsList;
        }
        return (
        !expanded ? 
        <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex items-center" onClick={() => setExpanded(prev => !prev)}>
            <span className="text-xl text-customColor-lightGrey mx-3">Add new...</span>
        </div>
        :
        <div className="m-5 rounded-xl bg-customColor-darkBlue w-full min-w-0">
            <div className="flex flex-col max-w-full">
                <div className="flex flex-col mx-5 mt-3">
                    <div className="flex items-center mb-3">
                        <span className="text-xl text-white">Title</span>
                        <input placeholder="(optional)" value={title} onChange={event => setTitle(event.target.value)} className="bg-transparent border border-black text-xl text-white flex-1 "/>
                    </div>
                    <textarea value={text} onChange={event => setText(event.target.value)} className="resize-none bg-transparent border border-black rounded-md text-white text-xl"></textarea>
                    <div onClick={addNewTextItem} className="text-xl text-white bg-customColor-orange rounded-xl p-1 w-fit my-3">Add new text item</div>
                </div>
                <hr className="border-customColor-lightBlue border-2"/>
                <div className="flex items-center ml-1 mr-5 my-3 text-xl">
                    <SearchIconToggle setSearchTypes={setSearchTypes} {...searchTypes}/>
                    <span className="mx-3 text-white">Search</span>
                    <input value={search} onChange={event => setSearch(event.target.value)} onKeyDown={searchOnEnterPressed} type="text" className="flex-1 bg-transparent border border-black rounded-md text-white" placeholder="Title (year)"></input>
                </div>
                {search && !searchResults && <div className="text-red-600 text-lg ml-44">Hit enter to search</div>}
                {searchResults &&
                    <div className="flex gap-3 overflow-auto mx-3 max-w-full">
                        {generateSearchResultComponents(searchResults)}
                    </div>
                }
            </div>
        </div>
    )
}