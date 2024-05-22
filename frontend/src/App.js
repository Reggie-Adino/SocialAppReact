import "./App.css";
import Home from "./pages/Home/Home.js"
import Profile from "./pages/Profile/Profile.js"
import SignUp from "./pages/Register/Signup.js"
import Login from "./pages/Login/Login.js"
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
       
          <Route path="/profile/:id" element={<Profile />}></Route> 
          <Route path="/signup" element={ user !== null ?<Navigate to={"/"} /> : < SignUp />}></Route>
          <Route path="/login" element={user !== null ?<Navigate to={"/"} />: <Login />  }></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
