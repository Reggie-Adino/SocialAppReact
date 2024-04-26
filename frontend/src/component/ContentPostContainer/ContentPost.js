import React from "react";
import "./contentpost.css";
import profileimage from "../Images/Profile.png";
import imageIcon from "../Images/gallery.png";
import emojiIcon from "../Images/cat-face.png";
import videoIcon from "../Images/video.png";

const ContentPost = () => {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${profileimage}`} className="profileimage" alt="" />
          <input type="text" className="contentWritingpart" placeholder="write your thoughts" />
        </div>
        <div style={{display:"flex", marginLeft:'10px'}}>
          <div>
          <img src={`${imageIcon}`} className="icons" alt="" />
          <img src={`${emojiIcon}`} className="icons" alt="" />
          <img src={`${videoIcon}`} className="icons" alt="" />
          <button style={{height:"30px" ,marginRight:"12px",marginTop:"40px", paddingLeft:"20px" , paddingRight:"20px", marginLeft:"275px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default ContentPost;
