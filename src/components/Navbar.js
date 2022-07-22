import React from 'react'
import { BsFillHouseDoorFill  } from "react-icons/bs";

export default function Navbar(){
    return (
    <nav className='flex nav'>
        <div className='flex-none font-bold text-3xl logo' style={{color: "#BFC0C0",
border: "6px solid #D1462F",
textShadow: "3px 3px 2px rgba(255, 255, 255, 0.5)"}}>Collect Shunn</div>
        <div className='flex flex-none pl-10 font-bold text-xl nav--item'>Home<BsFillHouseDoorFill/></div>
        <div className='flex-auto'></div>
    </nav>
    )
}