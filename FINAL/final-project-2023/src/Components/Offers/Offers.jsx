import React from "react";
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusivo</h1>
                <h1>Ofertas para ti</h1>
                <p>Solo los mejores Productos</p>
                <button>Miralo ahora</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />

            </div>
            
        </div>
    )

}

export default Offers;