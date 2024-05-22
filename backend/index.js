const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./router/user")
const postRouter = require("./router/post")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Connected to mongo db")
}).catch((err) => {
  console.log("Some error occured", err)
})
app.use(cors())
app.use(express.json());
app.use("/api/user",userRouter)
app.use("/api/post",postRouter)



app.listen(5000, ()=> {
    console.log('Server started')
})