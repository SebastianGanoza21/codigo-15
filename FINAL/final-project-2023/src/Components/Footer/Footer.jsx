import React from "react";
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Oversize</p>
            </div>
            <ul className="footer-links">
                <li>Empresa</li>
                <li>Productos</li>
                <li>Oficiales</li>
                <li>Sobre de Nosotros</li>
                <li>Contactos</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - Reservado|Sebastian Ganoza.</p>
            </div>
        </div>
    )

}

export default Footer;