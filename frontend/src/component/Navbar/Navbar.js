import React from "react";
import "./navbar.css";
import  searchIcon from '../Images/search.png'
import Notification from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png"
import { Link} from "react-router-dom";
const Navbar = () => {
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
        <Link to={"/profile/643889443hbjcsj"}>
        <div style={{display:'flex', alignItems:'center'}}>
            <img src={`${Profileimage}`} alt="" className="ProfileImage" />
            <p style={{marginLeft:'5px'}}>Suman</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;