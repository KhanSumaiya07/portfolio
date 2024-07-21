import React from 'react'
import './navbar.css'
import Button from '../button/button'
const Navbar = () => {
    return (
        <div className='nav-wrapper'>
            <div className='logo'>
            <a href="#home">logo</a>
            </div>
            <div className='nav-content'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            <Button text='Hire me'/>

            </div>
        </div>
    )
}

export default Navbar
