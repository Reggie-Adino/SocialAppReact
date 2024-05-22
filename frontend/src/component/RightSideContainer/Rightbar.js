import React, {useEffect,useState} from "react";
import "./rightbar.css";
import Follow from './Follow.js';
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import axios from 'axios';
import { useSelector } from "react-redux";

const Rightbar = () => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user, "from right bar");
  let id = user?.other?._id;

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

  console.log(users,"----------right bar---------------")
  return (


    <div className="rightbar">
      <div className="rightcontainer">
        <div className="adsContainer">
          <img src={ads} className="adsimg" alt="" />
          <div>
            <p
              style={{ textAlign: "start", marginLeft: "10px", marginTop: -20 }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={image1} className="adsimg" alt="" />
          <div>
            <p
              style={{ textAlign: "start", marginLeft: "10px", marginTop: -20 }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-16px",
              }}
            >
              Buy codedemy course
            </p>
          </div>
        </div>
      </div>

      <div className="rightcontainer2">
        <h3 style={{ marginLeft: "10px", textAlign: "start" }}>
          Suggested for you
        </h3>

        {users.map(item => (
          <Follow  userdetails={item} key={item._id}/>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Rightbar;
