import React from 'react'
import { BsFillHouseDoorFill  } from "react-icons/bs";

export default function Navbar(){
    return (
    <nav className='flex bg-customColor-darkBlue'>
        <div className='flex-none font-bold text-3xl text-customColor-lightGrey' >Collect Shunn</div>
        <div className='flex flex-none pl-10 font-bold text-xl text-customColor-orange'>Home<BsFillHouseDoorFill/></div>
        <div className='flex-auto'></div>
    </nav>
    )
}