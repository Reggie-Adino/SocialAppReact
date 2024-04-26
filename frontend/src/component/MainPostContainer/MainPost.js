import React, { useEffect, useState } from "react";
import "./mainpost.css";
import ContentPost from "../ContentPostContainer/ContentPost.js";
import Post from "../PostContainer/Post.js";
import axios from "axios";

const MainPost = () => {
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
