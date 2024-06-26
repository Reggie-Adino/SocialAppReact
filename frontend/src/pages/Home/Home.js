  import React from 'react'
import "./home.css"
import Navbar from '../../component/Navbar/Navbar'
import Leftbar from '../../component/LeftSideContainer/Leftbar.js'
import Rightbar from '../../component/RightSideContainer/Rightbar.js'
import "./home.css"
import MainPost from '../../component/MainPostContainer/MainPost.js'
import { useSelector } from 'react-redux';


const Home = () => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div  className='home'>
      <Navbar />
     <div className='ComponentContainer'>
      <Leftbar /> 
      <MainPost />
      <Rightbar />
     </div>
    </div>
  )
}

export default Home