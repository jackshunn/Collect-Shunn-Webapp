import '../styles/List.css'
import React from 'react'

export default function List(props){
    return (
        <div className='border-2 rounded-lg justify-center h-96 max-w-lg list' onClick={props.handleClick}>
            <span>{props.title}</span>
        </div>
    )
}