import React from 'react'
import '../style.css'
import Button from '../button/button'
const Home = () => {
    return (
        <div id='home' data-scroll data-scroll-speed="2">
            <div className='home-container'>
                <div className='bg-hero-banner'>
                    <div className='bg-image-circle'>
                        <div className='img-overlay'>
                        </div>
                    </div>
                    <div className='bg-blur-blue'>
                    </div>
                </div>
                <div className='home-content'>
                    <h1>Crafting Captivating Digital Experiences as a <mark>UI Developer</mark></h1>
                    <p>I create user Friendly and visually appealing web interfaces, combining design and development for smooth user experiences. </p>
                    <a href='https://drive.google.com/file/d/1fZl-VNctl4wRaJQWc5h-e67Nyp2m00Qf/view?usp=drivesdk' title='resume'>
                    <Button text='Download CV'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
