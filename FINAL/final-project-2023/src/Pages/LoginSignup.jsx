import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your name" />
                <input type="Email"  placeholder="Email Address"/>
                <input type="password"  placeholder="Password"/>
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">¿Ya tienes una cuenta? <span>Ingrese aquí</span> </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>Al continuar, acepto los términos de uso y política de privacidad.</p>
            </div>
         </div>
        </div>
    )

}

export default LoginSignup;