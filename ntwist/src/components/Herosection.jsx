import React from 'react'
import "../styles/Herosection.css"

const Herosection = () => {
    return (
        <div className='hero-container'>
            <div className='read'>
                <h1>
                    Data-powered solutions
                    <br />
                    for Industrial Excellence 
                </h1>
                <button>Read More</button>
            </div>

            <div>
                <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="hero-img" />
            </div>
        </div>
    )
}

export default Herosection