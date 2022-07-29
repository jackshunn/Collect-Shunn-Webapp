import React from 'react'

export default function List(props){
    return (
        <div className='p-5 border-2 rounded-lg justify-center h-96 bg-customColor-lightBlue min-w-min' onClick={props.handleClick}>
            <span className="font-bold text-2xl text-customColor-orange">{props.title}</span>
        </div>
    )
}