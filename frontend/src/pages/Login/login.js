import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "./login.css"
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../component/ReduxContainer/apiCall';



const Login = () => {

  const dispatch = useDispatch();
  const {isFetching  , error} = useSelector((state)=>state.user);

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch ,{email , password});
  }

  return (
    <div className='mainContainerForsignup'>
      <div className='submainContainer'>
        <div style={{flex:1 , marginLeft:150  , marginBottom:"170px"}}>
          <p className='logoText'>Soc<span className='part'>ial</span></p>
          <p className='introtext'>Connect with your <span className='part'>family and friends </span></p>
        </div>
        <div style={{flex:3}}>
          <p className='createaccountTxt'>Login Account</p>
          <input type="email" name="" id="email" placeholder='email' className='inputText' onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder='******' name=""  id="password" className='inputText' onChange={(e)=>{setPassword(e.target.value)}} />
          <button className='btnforsignup' onClick={handleClick}>Login</button>
          <Link to={"/"}>
            <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Forgot password</p>
            <p style={{textAlign:'start' , marginLeft:"30.6%" }}>Create New Account</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login