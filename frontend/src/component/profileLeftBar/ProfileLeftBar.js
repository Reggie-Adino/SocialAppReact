import React,{useEffect, useState} from 'react'
import "./profileleftbar.css"
import image from "../Images/Profile.png"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useLocation,Link } from 'react-router-dom';

const ProfileLeftBar = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  // console.log(user,"___From profile left ___")
  
  console.log(user)
console.log(id)
  //  id = user.other._id
  const username = user.other.username;
  const [Follow , setUnFollow] = useState([user.other.following.includes(id) ? "Unfollow" : "Follow"]);
  const [users, setUsers] = useState([]);
  const accessToken = user.accessToken
  const handleFollow = async() => {
    if(Follow === "Follow") {
      await fetch(`http://localhost:5000/api/user/following/${id}`, {
           method: "PUT",
           headers: {
               'Content-Type': 'application/json',
               'token': accessToken
           },
           body: JSON.stringify({user:`${user.other._id}`})
           
       },
       setUnFollow("UnFollow"));
  } else {
    await fetch(`http://localhost:5000/api/user/following/${id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json',
          'token': accessToken
      },
      body: JSON.stringify({user:`${user.other._id}`})
      
  },
  setUnFollow("Follow"));
  }
    }
      

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/post/user/details/${id}`);
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occurred:", error);
      }
    };
  
    fetchData(); // Call the async function
  }, []);


  const [followingUser,setFollowingUser] = useState([]);
  console.log(users)
  useEffect(() => {
    try {
      const getFollowers = async() => {
        const response =  await axios.get(`http://localhost:5000/api/post/following/${id}`)
        setFollowingUser(response.data)
      } 
      getFollowers()     
    } catch (error) {
      console.log(Error)
    }
  },[])

  let followersCounter = users?.followers?.length;
  let followingCounter = users?.following?.length;

  return (
  
        <div className='ProfileLeftbar'>
      <div className=" NotificationsContainer" >
      <img src={`${image}`} className='ProfilepageCover' alt="" />
        <div style={{display:'flex', aliblackms:'center', marginTop:-30}}>
            <img src={`${users.profile}`} className='Profilepageimage' alt="" />
            <div>
            <p style={{marginLeft:6, marginTop:20}}>{users.username }</p>
            <p style={{marginLeft:6, marginTop:20, color:'black', textAlign:-20, fontSize:11}}>Software Developer</p>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black', marginLeft:20, fontSize:'14prix'}}>Followers</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginTop:17}}>{followersCounter}</p>
        </div>

        {/* <div style={{display:'flex', aliblackms:'center', marginTop:-30}}>
            <img src={`${user.other.profile}`} className='Profilepageimage' alt="" />
            <div>
            <p style={{marginLeft:6, marginTop:20}}>{username }</p>
            <p style={{marginLeft:6, marginTop:20, color:'black', textAlign:-20, fontSize:11}}>Software Developer</p>
            </div>
            
        </div> */}

    
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black', marginLeft:20, fontSize:'14prix'}}>Following</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginTop:17}}>{followingCounter}</p>
        </div>
    

        {/* <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black', marginLeft:20, fontSize:'14px'}}>Friends</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginTop:-20}}>{followersCounter}</p>
        </div> */}
     
        <div>
          <p style={{color:'black', marginLeft:20, fontSize:'14px',marginRight:30, marginTop:30}}>User bio</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginRight:8, textAlign:'start', marginTop:17}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, odit ipsa blanditiis nemo perferendis.</p>
        </div>
        {user.other._id !== id ? <div onClick={handleFollow}><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>{Follow}</button></div> : <div><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button></div> }        
      </div>

      <div className=" NotificationsContainer" >
    <h3>Followings</h3>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <p style={{marginLeft:10}}>Friends</p>
      <p style={{marginRight:10, color:"#aaa"}}>See all</p>
      <p></p>
    </div>
    <div style={{display:'flex', flexWrap:'wrap', margginLeft:5}}>
              
       {followingUser.map(user => (
          <div style={{marginLeft:4, cursor:'pointer'}} key={user._id}>
            <Link to={`/profile/${user._id}`}>
        <img src={`${user.profile}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>{user.username}</p>
        </Link>
        </div>
        )
       )}
    </div>
      </div>
    </div>

  )
}

export default ProfileLeftBar