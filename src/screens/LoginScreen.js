import React, { useState } from 'react'
import netflix_logo from '../assets/netflix_logo_image.png';

import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
  const [signIn, setSignIn]=useState(false);
  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
            <img className='loginScreen_logo' src={netflix_logo} alt="netflix logo" />
            <button
            onClick={()=>setSignIn(true)}
            className='loginScreen_button'>Sign In</button>

            <div className="loginScreen_gradient"></div>
            <div className="loginScreen_body">
              {signIn ? (
                <SignUpScreen/>
              ):(

                <>
                <h1>Unlimited Films, TV Programmes and more.</h1>
                <h2>Watch anywhere. Cancel at anytime </h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                  <form>
                    <input type="email"
                    placeholder='Email Address'
                    />
                    <button 
                    onClick={()=>setSignIn(true)}
                    className='loginScreen_getStarted'>Get Started</button>

                  </form>
                </div>
                </>

              ) }
                
            </div>
        </div>

    </div>
  )
}

export default LoginScreen