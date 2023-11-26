import React from 'react'
import logo from '../assets/logo.svg'
import slash from '../assets/slash.svg'
import '../styles/navbar.css'
import '../styles/logo.css'

import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export const navbar = () => {
  return (
    <div className='wrapper'>
            <div className='logo-link'>

                    <div className='logo'>
                        <img src={logo} alt='logo'/>
                    </div>

                    <div className='link'>
                        <ul className='links'>
                            <li className='linkii'>  
                             Product
                              <span  >
                               <RiArrowDropDownLine className='dropdown' />
                              </span>
                            </li>
                            <li className='linkii'>
                                Solutions<span> <RiArrowDropDownLine  className='dropdown'/></span>
                            </li>
                            <li className='linkii'>
                                Open Source<span><RiArrowDropDownLine  className='dropdown'/></span>
                            </li>
                            <li className='linkii'>
                                Pricing
                            </li>
                        </ul>

                    </div>

            </div>
            
            <div className='search-sign'>
                    <div className='searchPannel'>

                        <div className='image-search'>
                            <CiSearch className='search-icon' />
                            <p className='searchjump'>Search or jump to ...</p>
                            <img src={slash} className='slash' alt='slash'/>

                        </div>
                    </div>


                    <div className='signUpIn'>
                        <p>Sign In</p>
                        <p className='signup'>Sign Up</p>
                    </div>
                    
                </div>
    </div>
  )
}


export default navbar;