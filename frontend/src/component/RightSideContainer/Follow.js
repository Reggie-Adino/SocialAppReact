import React, { useState } from 'react'
import addFriends from "../Images/add-user.png";
import userFollow from "../Images/afterFollowImg.png";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const Follow = ({userdetails}) => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  
  let id= user.other._id
  console.log(user)

    const userId = "65d77c7341efa731715a5d02";
    const accessToken = user.accessToken    
    const [follow, setFollow] = useState(addFriends);
    const handleClick = async(e) => {
       await fetch(`http://localhost:5000/api/user/following/${userdetails._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'token': accessToken
            },
            body: JSON.stringify({user:`${id}`}) // Adjust the body as needed
        });
      setFollow(userFollow)
    }

    // const options = {
    //   method: 'PUT',
    //   headers: {
    //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzUzODViNjhjNmM0NzM4NjczYTZhMSIsInVzZXJuYW1lIjoiam9objkwODMiLCJpYXQiOjE3MTU5ODQ5MTZ9.bTAkI5BMaA8NdKeikH-GeUnQ7A19igra3VXXFAaGXZA'
    //   },
    //   body: '{"user":"6635385b68c6c4738673a6a1"}'
    // };
    
    // fetch('http://localhost:5000/api/user/following/65d77c7341efa731715a5d02', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
    

    console.log(userdetails._id, "------ follow user -------")

  return (
    <div>
      <div style={{ marginTop: "-10px" }} >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }} 
          >
            <Link to={`/profile/${userdetails._id}`} >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${userdetails.profile}`} className="Profileimage" alt="Profileimage" />

              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>{userdetails._username}</p>
                <p
                  style={{
                    marginLeft: "10px",
                    marginTop: "-16px",
                    textAlign: "start",
                    fontSize: "10px",
                    color: "#aaa",
                  }}
                >
                  Suggested for you
                </p>
              </div>
            </div>
            </Link>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: "13px",
                borderRadius: "50%",
              }}

              onClick={e => handleClick(userdetails._id)}>
            
              <img src={`${follow}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Follow
