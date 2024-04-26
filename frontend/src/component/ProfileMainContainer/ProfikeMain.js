import React from 'react'
import coverImage from '../Images/Profile.png'
import "./profilemain.css"
import ContentPost from '../ContentPostContainer/ContentPost'
import Post from '../PostContainer/Post'

const ProfikeMain = () => {
  return (
    <div className='profilemainPostContainer'>
        <div>
            <img src={`${coverImage}`} className='profileCoverimage' alt="" />
            <h2 style={{marginTop:-40, color:"white", textAlign:"start", marginLeft:34,marginTop:-43}}>Your profile</h2>
        </div>  
        <ContentPost />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default ProfikeMain