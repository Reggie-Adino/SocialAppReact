import React from 'react'
import {Link} from 'react-router-dom'
import "./login.css"

const login = () => {
  return (
    <div className='mainContainerForsignup'>
      <div className='submainContainer'>
        <div style={{flex:1 , marginLeft:150  , marginBottom:"170px"}}>
          <p className='logoText'>Soc<span className='part'>ial</span></p>
          <p className='introtext'>Connect with your <span className='part'>family and friends </span></p>
        </div>
        <div style={{flex:3}}>
          <p className='createaccountTxt'>Login Account</p>
          <input type="email" name="" id="" placeholder='email' className='inputText' />
          <input type="password" placeholder='******' name=""  id="" className='inputText' />
          <button className='btnforsignup'>Login</button>
          <Link to={"/"}>
            <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Forgot password</p>
            <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Create New Account</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default login