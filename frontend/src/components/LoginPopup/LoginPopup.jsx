import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { useState } from 'react'
const LoginPopup = ({setshowLogin}) => {
  const [currState,setCurrState] = useState("Login");
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
          <div className="login-popup-title">
            <h1>{currState}</h1>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms and conditions of use & privacy policy.</p>
          </div>
          { currState==="Login"
          ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
          <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup