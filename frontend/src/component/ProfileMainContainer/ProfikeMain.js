import React, { useEffect, useState } from 'react'
import coverImage from '../Images/Profile.png'
import "./profilemain.css"
import ContentPost from '../ContentPostContainer/ContentPost'
import Post from '../ProfilePostContainer/Post.js'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const ProfikeMain = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [posts, setPosts] = useState([])

useEffect(() => {
  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/post/get/post/${id}`);
      setPosts(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  getPost(); // Call the fetchData function immediately

}, []); // Empty dependency array means this effect will only run once, on component mount

  return (
    <div className='profilemainPostContainer'>
        <div>
            <img src={`${coverImage}`} className='profileCoverimage' alt="" />
            <h2 style={{marginTop:-40, color:"white", textAlign:"start", marginLeft:34,marginTop:-43}}>Your profile</h2>
        </div>  
        <ContentPost />
        {posts.map(item => (
          <Post key = {item._id} post={item} />
        ))}
        
    </div>
  )
}

export default ProfikeMain