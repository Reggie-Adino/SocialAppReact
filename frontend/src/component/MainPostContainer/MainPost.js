import React, { useEffect, useState } from "react";
import "./mainpost.css";
import ContentPost from "../ContentPostContainer/ContentPost.js";
import Post from "../ProfileMainContainer/Post.js";
import axios from "axios";
import { useSelector } from "react-redux";

const MainPost = () => {
  
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user);
  let id = user?.other?._id;

  const accessToken = user.accessToken;

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/flw/${id}`,
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
    <div className="ProfilemainPostContainer">
      <ContentPost />
      {post.map((items) => {
        return items.map((postdetails) => (
          <Post key={postdetails._id} post={postdetails} />
        ));
      })}
    </div>
  );
};

export default MainPost;
