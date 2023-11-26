import React from 'react'
import '../styles/hero.css'
import logo from '../assets/3m.svg'
import kpmg from '../assets/kpmg.svg'
import mercedes from '../assets/mercedes.svg'
import pandg from '../assets/p&g.svg'
import telus from '../assets/telus.svg'
import sap from '../assets/sap.svg'
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
  return (

    <div  className='Hero'>

               <div className='border'> </div>
                    
                    
                <div>
                            <div className='title'>
                                <h1 className='title-one'>Let's build from here</h1>
                                <h2 className='title-two'>The world's leading AI-powered developer platform. </h2>
                            </div>

                            <div className='input-button'>

                                    <div className='email-button'>
                                        <input className='email-input' type='text' placeholder='Email address'/>
                                        <button className='github-button'>Sign Up for GitHub</button>
                                    </div>
                                        
                                    <button className='trial-button'>Start a free Entrprise Trial </button>

                            </div>

                            <div className='organisation'>

                                    <h3 className='organization'>Trusted by the world's leading organizations  <FiArrowDownRight className='downAarrow'/></h3>

                                    <div className='company-logo'>

                                        <img src={logo} alt='company-logo'/>
                                        <img src={kpmg} alt='company-logo'/>
                                        <img src={mercedes} alt='company-logo'/>
                                        <img src={sap} alt='company-logo'/>
                                        <img src={pandg} alt='company-logo'/>
                                        <img src={telus} alt='company-logo'/>

                                    </div>

                            </div>

                            <div>
                                <h2 className='productive'>Productivity</h2>
                               <div className='innovation'>
                                        <h1 className='acceleration'> <span className='accel-color'> Accelerate innovation</span></h1>
                                        <h1 className='acceleration'> Our AI-powered platform increases the</h1>
                                        <h1 className='acceleration'> pace of software development </h1>
                               </div>
                               
                                
                            </div>
                
                </div>

    </div>
    
  )
}

export default Hero