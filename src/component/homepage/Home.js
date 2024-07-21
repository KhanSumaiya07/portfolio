import React from 'react'
import '../style.css'
import Button from '../button/button'
const Home = () => {
    return (
        <div>
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
                    <Button text='Download CV'/>
                </div>
            </div>
        </div>
    )
}

export default Home
