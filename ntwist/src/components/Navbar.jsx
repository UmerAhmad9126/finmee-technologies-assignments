import React from 'react'
import "../styles/Navbar.css";
import Herosection from './Herosection';

const Navbar = () => {
    return (
        <div className='nav-container'>

            <nav className='navbar'>

                <div className='nav-child'>
                    <div>
                        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" alt="logo" />
                    </div>

                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Industries</li>
                            <li>AI Software</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

            </nav>

            <Herosection />

        </div>
    )
}

export default Navbar