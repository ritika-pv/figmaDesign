import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className='hero d-flex'>
      <div  className='heroText'>
        <div className='logo'>
            <img src='images\truck.png'/>
        </div>

        <div className='text' >
            <h2>
              Discover the <span className='reddish-color mr-2' >Best</span> 
              Food and Drinks
            </h2>
            <p className='mt-3 p-font w-70' >Naturally made Healthcare Products for the better care & support of your body.</p>

            <button className='round-btn mt-3' >Explore Now!</button>
        </div>
      </div>      
      {/* Banner */}
      <div className='imageBox postion-relative'>
          <img src='images\Vector1.png'/>
      </div>     
    </div>
  )
}

export default Hero