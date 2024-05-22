import React,{useState, useEffect} from 'react'
import "./profileright.css"
import image2 from "../Images/image2.jpg";
import addFriends from "../Images/add-user.png";
import axios from 'axios';
import Follow from '../RightSideContainer/Follow';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const ProfileRightBar = () => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user);
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  let idSuggest = user?.other?._id
  
  console.log(user)

  const [followers,setFollower] = useState([]);
  const[users, SetUsers] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/all/user/${id}`);
        SetUsers(res.data);
      } catch (error) {
        console.log("Some error occurred:", error);
      }
    };
  
    fetchData(); // Call the async function
  }, []);

  useEffect(() => {
    try {
      const getFollowers = async() => {
        const response =  await axios.get(`http://localhost:5000/api/post/followers/${id}`)
        setFollower(response.data)
      } 
      getFollowers()     
    } catch (error) {
      console.log(Error)
    }
  },[])
  return (
    <div className="Profilerightbar">
    <div className="profilerightcontainer">
      <h3>Followers</h3>
      {followers.map(user => (
        <div style={{marginTop: "10px"}} key = {user._id}>
        <div style={{display:'flex',alignItems:'center', marginLeft:10, cursor:'pointer'}}>
        <img src={`${image2}`} className='Friendsimage' alt="" />
        <p style={{textAlign:'start',marginLeft:'10px'}}>Har</p>
        </div>
       
     
       
      </div>
      ))}
      
    </div>

    <div className="rightcontainer2">
      <h3 style={{ marginLeft: "10px", textAlign: "start" }}>
        Suggested for you
      </h3>
      <div style={{ marginTop: "-10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          
          
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${image2}`} className="Profileimage" alt="" />
          <div>
 {users.map(user =>(
            <Follow userdetails={user} key={user._id}/>
          ))}
          </div>
           
            
          </div>
          <div
            style={{
              backgroundColor: "#aaa",
              padding: "10px",
              marginRight: "13px",
              borderRadius: "50%",
            }}
          >
            <img src={`${addFriends}`} className="addfriend" alt="" />
          </div>
        </div>
      </div>

     
    </div>
    <div></div>
  </div>
  )
}

export default ProfileRightBar