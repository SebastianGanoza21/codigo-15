import React from "react";
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hand-hand-icon">
                    <p>Nuevas</p>
                    
                    <img src={hand_icon} alt="" />
                </div>
                <p>Colecciones</p>
                <p>Para todos</p>
                <div className="">
                    
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}


export default Hero;