import React, { useState, useEffect } from "react";
import "./leftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import axios from "axios";

const Leftbar = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc3YzczNDFlZmE3MzE3MTVhNWQwMiIsInVzZXJuYW1lIjoiam9objkwODEiLCJpYXQiOjE3MTA3NzExMjZ9.lgefVTrf20XIsqkJYfqY0k_A5j2mK5dFGoDwWTNYZ8A";

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/flw/65d77c7341efa731715a5d02`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setPost(res.data);
      } catch (error) {}
    };

    getPost();
  }, []);

  console.log(post);

  return (
    <div className="Leftbar">
      <div className=" NotificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Notifications</p>
          <p style={{ color: "#aaa" }}>See all</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image}`} alt="" className="notificationimg" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13 }}>
            Madan like your post
          </p>
          <img src={`${image}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started following you
          </p>
          <img src={`${image2}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image1}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started following you
          </p>
          <img src={`${image3}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image2}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started following you
          </p>
          <img src={`${image4}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image3}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started following you
          </p>
          <img src={`${image5}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image4}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Madan liked your post
          </p>
          <img src={`${image6}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image5}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Madan liked your post
          </p>
          <img src={`${image}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image6}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Madan liked your post
          </p>
          <img src={`${image}`} className="followinguserimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", marginTop: -13 }}>
          <img src={`${image}`} alt="" className="notificationimg" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Madan liked your post
          </p>
          <img src={`${image}`} className="followinguserimage" alt="" />
        </div>
      </div>

      <div className=" NotificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div>
          {post.map((items) =>
            items.map((image) => (
              <img src={`${image.image}`} className="exploreimage" alt="" />
            ))
          )}

          <img src={`${image1}`} className="exploreimage" alt="" />
        <img src={`${image2}`} className="exploreimage" alt="" />
        <img src={`${image3}`} className="exploreimage" alt="" />
        <img src={`${image4}`} className="exploreimage" alt="" />
        <img src={`${image5}`} className="exploreimage" alt="" />
        <img src={`${image6}`} className="exploreimage" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
