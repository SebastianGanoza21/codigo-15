import React from "react";
import './NewsLetter.css'

const NewsLetter = () => {
    return(
        <div className="newsletter">
            <h1>Obtenga ofertas exclusivas con su Email</h1>
            <p>Suscríbete a nuestro boletín y mantente actualizado.</p>
            <div>
                <input type="email" placeholder="Email" />
                <button>Subcribete</button>
            </div>
        </div>
    )

}

export default NewsLetter;