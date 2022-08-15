import React from 'react'
import houseIcon from '../images/house-solid.svg';
import dropdownArrow from '../images/angle-right-solid-white.svg'

export default function Navbar(props){
    return (
    <nav className='flex bg-customColor-darkBlue items-center'>
        <div className='flex-none font-bold text-3xl text-customColor-lightGrey mr-10' >Collect Shunn</div>
        <img src={houseIcon} alt='' className='h-4'/>
        <div className='flex flex-none font-bold text-xl text-customColor-orange'>Home</div>
        <div className='flex-1'></div>
        <div className='text-xl text-white'>{props.username}</div>
        <img src={dropdownArrow} alt='' className='h-6 rotate-90 mx-1'/>
    </nav>
    )
}