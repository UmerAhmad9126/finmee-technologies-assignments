import React from 'react'
import "../styles/Footer.css"
import { PiTwitterLogo } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
    return (
        <div className='footer'>

            <div>
                <div>
                    <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="logo" />
                </div>
                <div className='link'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                </div>
                <div>
                    <p >9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                </div>
                <div className='social'>
                    <PiTwitterLogo className='logo' />
                    <SlSocialLinkedin className='logo' />
                </div>
                <div>
                    <p>© 2022. Ntwist Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer