import React from 'react'
import '../style.css'

const About = () => {
  return (
    <div>

      <div className='main-wrapper sec-padding'>
        <div className='heading'>
          <h2>About <mark>Me</mark> </h2>
        </div>
        <div className='flex'>
          <div className='left'>
            <div className='img-container'>
            </div>
          </div>
          <div className='right'>
            <div className='about-content'>
              <h3>Hi I’m Sumaiya khan a <mark>Frontend</mark> Developer & <mark>UI/UX</mark> Designer</h3>
              <p>I am passionate about creating user-friendly interfaces and enjoy tackling new challanges. I Strive for excellence in everything I do. Beyond coding, I find joy in exploring new plaes, capturing moments and reading Books and Novels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
