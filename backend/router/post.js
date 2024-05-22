const express = require("express");
const router = express.Router();
const Post = require("../Modals/post");
const User = require("../Modals/users");
const { verifyToken } = require("./verifytoken");

//create Post
router.post("/user/post", verifyToken,   async(req, res) => {
  try {
    const { title, image, video } = req.body;
    const newPost = new Post({
        title,
        image,
        video,
        user: req.user.id
    });

    await newPost.save();
        res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json("Ïnternal server error")
  }
})

// upload post by one user
  
router.get("/get/post/:id", async (req, res) => {
          try {
              const myPost = await Post.find({user:req.params.id})
              if(!myPost) {
                return res.status(200).json("You don't have any post")
              }
              return res.status(200).json(myPost)
          } catch (error) {
            res.status(500).json("Internal server error")
          }
} )




// Update user post
router.put("/update/post/:id", verifyToken, async (req, res) => {
  try {
    // Check if the post exists
    const postId = await Post.findById(req.params.id);    
    if (!postId) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Update the post
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // Return the updated post
    res.status(200).json(updatedPost);
  } catch (error) {
    // Handle errors
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Like
router.put("/:id/like", verifyToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
   if(!post.like.includes(req.user.id)) {
    if(post.dislike.includes(req.user.id)) {
      await post.updateOne({$pull: {dislike:req.user.id}})
    }
    await post.updateOne({$push : {like: req.user.id}})
    return res.status(200).json("Post has been liked")
   } else {
    await post.updateOne({$pull: {like:req.user.id}})
    return res.status(200).json("Post has been unliked")
   }   
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }   
})

// router.put("/:id/like", verifyToken, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
    
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     const userId = req.user.id; // Assuming req.user contains user information including the user ID

//     if (!post.like.includes(userId)) {
//       await post.updateOne({ $push: { like: userId } });
//       return res.status(200).json({ message: "Post has been liked" });
//     } else {
//       await post.updateOne({ $pull: { like: userId } });
//       return res.status(200).json({ message: "Post has been unliked" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


//Dislike
router.put("/:id/dislike", verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post.dislike.includes(req.user.id)) {
    if (post.like.includes(req.user.id)) {
      await post.updateOne({ $pull: { like: req.user.id } });
    } 
    await post.updateOne({$push: { dislike: req.user.id }});
    return res.status(200).json("Post has been disliked");
  } else {
    await post.updateOne({ $pull: { dislike: req.user.id } });
    return res.status(200).json("Post has been unliked");
  }  
})



//comment
router.put("/comment/post", verifyToken, async (req, res) => {
  try {
    const {comment, postid} = req.body
    const comments = {
      user:req.user.id,
      username: req.user.username,
      comment,
      postid
    }

    const post = await Post.findById(postid);
    post.comments.push(comments)
    await post.save()
    return res.status(200).json(post)
  } catch (error) {
    return res.status(500).json("Internal server error")
  }
})

//Delete post
router.delete("/delete/post/:id", verifyToken, async (req, res) => {
  try {
    const post = await Post.findbyId(req.params.id)
    if(post.user === req.user.id) {
      const deletePost = await Post.findByIdAndDelete(req.params.id)
      return res.status(200).json("Your post has been deleted")
    } else {
      return res.status(400).json("You are not allowed ro delete this post")
    }
  } catch (error) {
    return res.status(500).json("Internal server error")
  }  
})


/// Get Following users
router.get("/following/:id", async(req , res)=>{
  try {
    const user = await User.findById(req.params.id);
    const followinguser = await Promise.all(
          user.following.map((item)=>{
                return User.findById(item)
          })
    )

    let followingList=[];
    followinguser.map((person)=>{
          const {email, password , phonenumber , following , followers , ...others} = person._doc;
          followingList.push(others);
    })

    res.status(200).json(followingList);
  } catch (error) {
       return res.status(500).json("Internal server error")
  }
})

/// Get followers
router.get("/followers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const followersuser = await Promise.all(
      user.followers.map((item) => {
        return User.findById(item);
        // try this if same results
        //return User.find({user:item})
      })
    );

    const followersList = followersuser.map((person) => {
      const { email, password, phonenumber, following, followers, ...others } = person._doc;
      return others;
    });

    res.status(200).json(followersList);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
