import React from 'react'
import '../styles/filter.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
const Footer = () => {
  return (
    <div> 
       <div className='footer'>
            <div className='subscribe'>
                <p className='svg'>GitHub</p>
                <p className='newsletter'>Subscribe to our developer newsletter</p>
                <p className='tips'>Get tips, technical guides, and best practices Once a month.</p>
                <p className='tips1'> Right in your inbox.</p>
                <button className='button'>Subscribe</button>
            </div>
            <div className='product'>
                <p>Product</p>
                <p>Features</p>
                <p>Enterprise</p>
                <p>Copilot</p>
                <p>Security</p>
                <p>Pricing</p>
                <p>Team</p>
                <p>Resources</p>
                <p>Roadmap</p>
                <p>Compare GitHub</p>
            </div>
            <div className='platform'>
                <p>Platform</p>
                <p>Developer API</p>
                <p>Partners</p>
                <p>Electron</p>
                <p>GitHub Desktop</p>
            </div>
            <div className='support'>
                <p>support</p>
                <p>Docs</p>
                <p>Community Forum</p>
                <p>Professional Services</p>
                <p>Premium Support</p>
                <p>Skills</p>
                <p>Status</p>
                <p>Contact GitHub</p>
            </div>
            <div className='company'>
                <p>Company</p>
                <p>About</p>
                <p>Customer stories</p>
                <p>Blog</p>
                <p>The ReadME Project</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Inclusion</p>
                <p>Social Impact</p>
                <p>Shop</p>
            </div>
       </div>

       <div className='footerr'>
          <div className='licence'>
            <p>© 2023 GitHub, Inc.</p>
            <p>Terms</p>
            <p>Privacy (Updated 08/2022)</p>
            <p>Sitemap</p>
            <p>What is Git?</p>
          </div>

          <div className='logo-main'>

          
                <FaXTwitter className='logo' />
                <FaSquareFacebook className='logo' />
                <FaLinkedinIn  className='logo'/>
                <CiYoutube className='logo'/>
                <FaTwitch className='logo'/>
                <FaTiktok className='logo'/>
                <VscGithub className='logo logo-margin'/>


          </div>
       </div>

    </div>
  )
}

export default Footer