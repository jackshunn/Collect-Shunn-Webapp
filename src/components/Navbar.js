import React, { useState } from 'react';
import houseIcon from '../images/house-solid.svg';
import dropdownArrow from '../images/angle-right-solid-white.svg';
import collectShunnLogo from '../images/collect-shunn-logo.png';

export default function Navbar(props){
    const [userDropdown, setUserDropdown] = useState(false);

    return (
    <nav className='flex bg-customColor-darkBlue items-center'>
        <img src={collectShunnLogo} alt="Collect Shunn" className='flex-none h-11 font-bold text-3xl text-customColor-lightGrey mr-10' onClick={props.handleNavigate}></img>
        <div className='flex items-center' onClick={props.handleNavigate}>
            <img src={houseIcon} alt='' className='h-4 mr-1'/>
            <div className='flex flex-none font-bold text-xl text-customColor-orange'>Home</div> 
        </div>
        <div className='flex-1'></div>
        <div className='relative'>
            <div className='flex items-center select-none' onClick={() => setUserDropdown(prev => !prev)}>
                <div className='text-xl text-white'>{props.username}</div>
                <img src={dropdownArrow} alt='' className='h-6 rotate-90 mx-2'/>
            </div>
            <div className={`${userDropdown ?  "" : "hidden"} z-10 text-customColor-orange text-xl text-center absolute rounded w-full mt-1.5 bg-customColor-darkBlue`} onClick={props.handleSignOut}>Sign Out</div>
        </div>
    </nav>
    )
}