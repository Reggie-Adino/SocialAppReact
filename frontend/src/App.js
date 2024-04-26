import "./App.css";
import Home from "./pages/Home/Home.js"
import Profile from "./pages/Profile/Profile.js"
import SignUp from "./pages/Register/Signup.js"
import Login from "./pages/Login/login.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
       
          <Route path="/profile/:id" element={<Profile />}></Route> 
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
