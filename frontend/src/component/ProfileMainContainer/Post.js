import React, { useEffect, useState } from "react";
import "./post.css";
import profileimage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import commentIcon from "../Images/speech-bubble.png";
import moreIcon from "../Images/more.png";
import shareIcon from "../Images/share.png";
import anotherLikeIcon from "../Images/setLike.png";
import axios from 'axios'
import { useSelector } from "react-redux";

const Post = ({post}) => {

  const userDetails = useSelector((state)=>state.user);
  let userr = userDetails.user


  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/post/user/details/${post.user}`);
        setUser(res.data);
      } catch (error) {
        console.log("Some error occurred:", error);
    }
    };
    fetchData(); // Call the async function
  }, []);


  
  const userId = "65d77c7341efa731715a5d02"
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc3YzczNDFlZmE3MzE3MTVhNWQwMiIsInVzZXJuYW1lIjoiam9objkwODEiLCJpYXQiOjE3MTA3NzExMjZ9.lgefVTrf20XIsqkJYfqY0k_A5j2mK5dFGoDwWTNYZ8A"

  const [like, setLike] = useState(post.like.includes(userId) ? anotherLikeIcon : LikeIcon);
  const [count, setCount] = useState(post.like.length);

    const [comments, setComments] = useState(post.comments)
    const [commentwriting, setCommentWriting] = useState('')
    const [show, setShow] = useState(false);
    console.log(post)

  // function handleLike() {
  //   setLike((prev) => !prev);
  //   if (!like) {
  //     setCount(count + 1);
  //   } else {
  //     setCount(count - 1);
  //   }
  // }



  const handleLike = async() => {
    setLike((prev) => !prev);
    if (like === LikeIcon) {
      await fetch(`http://localhost:5000/api/post/${post._id}/like`, {method:'PUT', headers:{'Content-Type':'application/json',token:accessToken}});
      setLike( anotherLikeIcon );
      setCount((prevCount) => prevCount + 1);
    } else {
      await fetch(`http://localhost:5000/api/post/${post._id}/like` , {method:"PUT" , headers:{'Content-Type':"application/Json" , token:accessToken}});
      setLike(LikeIcon);
      setCount((prevCount) => prevCount - 1);
    }
  }

  const addComment = () => {
    const comment = {
        "postid":`${post._id}`,
        "username":`${userr.other.username}`,
        "comment":`${commentwriting}`
    }

    setComments(comments.push(comment))
  }

  const handleComment = ({post}) => {
    addComment();
  }

  const handleShow  = () => {
    setShow(prev => !prev)
  }

  console.log(comments)
  console.log(user)

  return (
    <div>
      <div className="PostContainer">
        <div className="SubPostContainer">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {user.profile == "" ?   <img src={`${profileimage}`} className="ProfileImage" alt="" />   :   (<img src={`${user.profile}`} className="ProfileImage" alt="" />)}
            
              <div>
                <p style={{ marginLeft: "5px", textAlign: "start" }}>{user.username}</p>
                <p
                  style={{
                    fontSize: "11px",
                    textAlign: "start",
                    marginLeft: "5px",
                    color: "#aaa",
                    marginRop: -13,
                  }}
                >
                  Following by Suman
                </p>
              </div>
              <img src={`${moreIcon}`} className="moreicons" alt="" />
            </div>
            <p
              style={{
                textAlign: "start",
                width: "96%",
                marginLeft: 10,
                marginTop: 0,
              }}
            >
              {post.title}
            </p>
            <img src={`${post.image}`} className="PostImages" alt="" />
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={`${like ? anotherLikeIcon : LikeIcon}`}
                    className="iconsforPost"
                    alt=""
                    onClick={handleLike}
                  />
                  <p style={{ marginLeft: "6px" }}>{count} Likes</p>
                </div>
              </div>
              <div style={{ display: "flex", marginLeft: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img src={`${commentIcon}`} className="iconsforPost" alt="" onClick={handleShow} />
                  <p style={{ marginLeft: "6px" }}>{post.comments.length} comments</p>
                </div>
              </div>

              <div style={{ display: "flex", marginLeft: "90px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img src={`${shareIcon}`} className="iconsforPost" alt="" />
                  <p style={{ marginLeft: "6px" }}>share</p>
                </div>
              </div>
            </div>

             { show ? <div>  <div style={{display:"flex",alignItems:"center"}}>
              <img src={`${profileimage}`} className="ProfileImage" alt="" />
              <p style={{marginLeft:"6px"}}>Suman</p>
              <input type="text" className="commentinput" placeholder="Write your thought" onChange={(e) => {
                setCommentWriting(e.target.value)
              }}/>
              <button className="addCommentbtn" onClick={handleComment}>post</button>
            </div> 
            
            {comments.map((item) => (
                <div style={{display:"flex", alignItems:"center"}}>
                <img src={`${profileimage}`} className="ProfileImage" alt="" />
                <p style={{marginLeft:"6px", fontSize:18, marginTop:6}}>{item.username}</p>
                <p style={{marginLeft:"20px", textAlign:"start", marginTop:-16,marginLeft:"55px"}}>{item.title}</p>
                <p style={{marginLeft:"20px", textAlign:"start", marginTop:-16,marginLeft:"55px", color:"#aaa", fontSize:11}}>Reply</p>             
                </div>
            ))} 

            </div>

            : ''}
          
                        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
