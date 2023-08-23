import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='d-flex aboutUs'>
        <div className='imgBox'>
            <img src='images\aboutImage.png'/>
        </div>
        <div className='aboutText'>
            <h2>About Us</h2>
            <p className='p-font mt-25'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button className='round-btn mt-25'>Read More</button>
        </div>
    </div>
  )
}

export default About