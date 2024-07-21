import React from 'react'
import './button.css'

const Button = ({ text }) => {
    return (
        <div>
            {/* <button className='btn'>{text}</button> */}

            <a href="#_" class="button">
                <span class="button-bg1"></span>
                <span class="button-bg2"></span>
                <span class="button-bg3"></span>
                <span class="button-text">{text}</span>
            </a>

        </div>
    )
}

export default Button
