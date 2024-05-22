import React from "react";
import "./navbar.css";
import  searchIcon from '../Images/search.png'
import Notification from "../Images/bell.png";
import Message from "../Images/message.png";
// import Profileimage from "../Images/Profile.png"
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../ReduxContainer/userReducer"
const Navbar = () => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user);
  let id = user?.other?._id;

  const dispatch = useDispatch() ;
  
  const handleClick = () => {
    dispatch(logout()) 
  }

  return (
    <div className="mainNavbar">
      <div className="logoCpntainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} alt="" className="searchIcon" />
          
          <input type="text" name="" id="" className="searchInput" placeholder="Search for your friends" />
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${Notification }`} alt="" className="Icons" />
        <img src={`${Message}`} alt="" className="Icons" />
        <Link to={`/profile/${id}`}>
        <div style={{display:'flex', alignItems:'center'}}>
            <img src={`${user.other.profile}`} alt="" className
            ="ProfileImage" />
            <p style={{marginLeft:'5px'}}>{user.other.username}</p>
        </div>
        </Link>
        <div className="" style={{marginRight:"20px", marginLeft:"20px", cursor: "pointer"}} onClick={handleClick}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;