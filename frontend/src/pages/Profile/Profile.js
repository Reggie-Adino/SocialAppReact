import React from 'react'
import './profile.css'
import Navbar from '../../component/Navbar/Navbar'
import ProfileLeftBar from '../../component/profileLeftBar/ProfileLeftBar'
import ProfileRightBar from '../../component/profilerightbar/ProfileRightBar'
import ProfileMain from '../../component/ProfileMainContainer/ProfikeMain.js'

const Profile = () => {
  return (
    <div className='profileContainer'>
      <Navbar />
      <div className='subProfileContainer'>
        <ProfileLeftBar />
        <ProfileMain />
        <ProfileRightBar />
      </div>
    </div>
  ) 
}

export default Profile