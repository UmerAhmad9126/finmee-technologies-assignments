import React from 'react'
import '../styles/feature.css'
import code from'../assets/code.png';
import code1 from '../assets/code2.png'
import code2 from '../assets/code3.png'
import code3 from '../assets/code4.png'
import code4 from '../assets/code5.png'
const Feature = () => {
  return (
    <div className='feature'> 

      <div>
           
       <img src={code} className='code' alt='code-image'/>
       <img src={code1} className='code1' alt='code-image'/> 

      </div>

      <div className='ai-copilot'>
        <p className='copilot'> <span className='github-copilot'>GitHub Copilot</span>  empowers developers to</p>
        <p className='copilot'>complete tasks 55% faster with</p>
        <p className='copilot'>contextualized AI coding assistance across</p>
        <p className='copilot'>workflows.</p>
        <p className='copilot github-copilot explore'>Explore GitHub Copilot </p>
      </div>

      <div className='didKnow'>
         <button className='know-btn'>Did You Know ?</button>
         <div className='increase'>
            22% increase
         </div>
         <p className='copilot github-copilot '>in developer productivity after three</p>
         <p className='copilot github-copilot '>years with GitHub</p>
         <p className='copilot github-copilot explore'>Read the report </p>

      </div>

      <div className='actions'>
           
        <div className='ai-copilot2 github-action'>
                <p className='copilot2'> <span className='github-copilot'>GitHub Actions</span> automates your build,</p>
                <p className='copilot2'>test, and deployment workflow with</p>
                <p className='copilot2'>simple and secure CI/CD.</p>

                <p className='copilot github-copilot explore discover'>Discover GitHub Actions</p>

                
      
        </div>

          <div className='code3'>
             <img src={code2} className='code2' alt='code-image'/>
          </div>
      </div>

      <div className='action-flex'>
                <div className='actions2'>
                        <div className='ai-copilot2 github-action2'>
                                        <p className='copilot2'> <span className='github-copilot'>GitHub Actions</span> automates your build,</p>
                                        <p className='copilot2'>test, and deployment workflow with</p>
                                        <p className='copilot2'>simple and secure CI/CD.</p>

                                        <p className='copilot github-copilot explore discover2'>Discover GitHub Actions</p>

                        
            
                        </div>

                        <div className='code3'>
                            <img src={code3} className='code4' alt='code-image'/>
                        </div>
                </div>

                <div className='actions3'>

                <div className='ai-copilot2 github-action2'>
                                        <p className='copilot2'> <span className='github-copilot'>GitHub Actions</span> automates your build,</p>
                                        <p className='copilot2'>test, and deployment workflow with</p>
                                        <p className='copilot2'>simple and secure CI/CD.</p>

                                        <p className='copilot github-copilot explore discover2'>Discover GitHub Actions</p>

                        
            
                        </div>

                        <div className='code3'>
                            <img src={code4} className='code5' alt='code-image'/>
                        </div>



                    
                </div>
      </div>
      

    </div>
  )
}

export default Feature;