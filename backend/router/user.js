const router = require("express").Router();
const User = require("../Modals/users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifytoken");
const Post = require("../Modals/post");

const JWTSEC = "gjahjah35643y484y80ndn";

router.post(
  "/create/user",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("username").isLength({ min: 5 }),
  body("phonenumber").isLength({ min: 10 }),
  async (req, response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return response.status(400).json("Some error occured");
    }
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return response
          .status(200)
          .json("Please login with correct credentials");
      }

      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secpass,
        phonenumber: req.body.phonenumber,
      });

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWTSEC
      );

      await user.save();
      response.status(200).json({ user, accessToken });
    } catch (error) {
      return response.status(500).json("Internal error occured");
    }
  }
);

//login
router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }

      console.log(user);

      const compare = await bcrypt.compare(req.body.password, user.password);
      if (!compare) {
        return res.status(400).json({ msg: "Password is incorrect" });
      }

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWTSEC
      );

      const { password, ...other } = user._doc;

      res.status(200).json({ other, accessToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Server Error" }); // Corrected curly brace
    }
  }
);

//Following
router.put("/following/:id" , verifyToken , async(req , res)=>{
  if(req.params.id !== req.body.user){
      const user = await User.findById(req.params.id);
      const otheruser = await User.findById(req.body.user);

      if(!user.followers.includes(req.body.user)){
          await user.updateOne({$push:{followers:req.body.user}});
          await otheruser.updateOne({$push:{following:req.params.id}});
          return res.status(200).json("User has followed");
      }else{
          await user.updateOne({$pull:{followers:req.body.user}});
          await otheruser.updateOne({$pull:{following:req.params.id}});
          return res.status(200).json("User has Unfollowed");
      }
  }else{
      return res.status(400).json("You can't follow yourself")
  }
})

//Fetch post from followers
router.get("/flw/:id", verifyToken,async(req, res) => {
 try {
  const user = await User.findById(req.params.id)
  const followrsPost = await Promise.all(
    user.following.map((item) => {
      return Post.find({user:item})  
    })
  )
  return res.status(200).json(followrsPost)
 } catch (error) {
  return res.status(500).json("Internal server error")
 } 
})


//update user profile
router.put("/update/:id", verifyToken, async (req, res) => {
  try {
    if(req.params.id === req.user.id){
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
  
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true } 
        );
  
        if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
        }        
    }
  res.status(200).json(updatedUser);
    } else {
      return res.status(400).json({ error: "You are not allowed to update this user details" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


//Delete User account
router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    if (req.params.id !== req.user.id) {
      return res.status(400).json({ error: "Account does not match" });
    } else {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ message: "User account has been deleted" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//get user details for post
router.get("/post/user/details/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user) {
      return res.status(400).json("User not found")
    }
    const {email, password, phonenumber, following, followers, ...others} = user._doc
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json("Internal server error")
  }
})

//getting user to follow

// router.get('/all/user/', verifyToken, async(req, res) => {
//   try {
//    const allUsers = await User.find();
//   const user = await User.findById(req.user.id);
  
//    const followingUser = await Promise.all(user.following.map((item => {
//     return item
//    })));

//    let suggestedUsers = allUsers.filter(val =>{
//     return !followingUser.find(item => {
//       return val._id === item;
//     })
//    })


//    let usersTofFollow = await Promise.all(
//     suggestedUsers.map(item => {
//       const {email, password, followers, following, ...others} = item._doc; 
//     })
//    );

//    res.status(200).json(usersTofFollow);
//   } catch (error) {
//     res.status(500).json("Internal server error")
//   }
//})

router.get('/all/user/', verifyToken, async (req, res) => {
  try {
    const allUsers = await User.find();
    const user = await User.findById(req.user.id);
  
    const followingUserIds = user.following.map(item => item);

    // Filter users who are not being followed by the current user
    const suggestedUsers = allUsers.filter(val => !followingUserIds.includes(val._id));

    // Send only necessary user data
    const usersToFollow = suggestedUsers.map(({ email, password, followers, following, ...others }) => ({
      ...others // Spread the rest of the properties
    }));

    res.status(200).json(usersToFollow);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;