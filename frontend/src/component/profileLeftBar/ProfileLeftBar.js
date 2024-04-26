import React from 'react'
import "./profileleftbar.css"
import image from "../Images/Profile.png"
import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
import image6 from "../Images/image6.jpg"


const ProfileLeftBar = () => {
  return (
  
        <div className='ProfileLeftbar'>
      <div className=" NotificationsContainer" >
      <img src={`${image}`} className='ProfilepageCover' alt="" />
        <div style={{display:'flex', aliblackms:'center', marginTop:-30}}>
            <img src={`${image}`} className='Profilepageimage' alt="" />
            <div>
            <p style={{marginLeft:6, marginTop:20}}>Suman</p>
            <p style={{marginLeft:6, marginTop:20, color:'black', textAlign:-20, fontSize:11}}>Software Developer</p>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black', marginLeft:20, fontSize:'14px'}}>Profile Views</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginTop:17}}>43924</p>
        </div>

    

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black', marginLeft:20, fontSize:'14px'}}>Friends</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginTop:-20}}>43924</p>
        </div>
     
        <div>
          <p style={{color:'black', marginLeft:20, fontSize:'14px',marginRight:30, marginTop:30}}>User bio</p>
          <p style={{color:'black', marginLeft:20,fontSize:'12px', marginRight:8, textAlign:'start', marginTop:17}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veritatis, odit ipsa blanditiis nemo perferendis.</p>
        </div>
        <button style={{width:"100%", paddingTop:4, paddingBottom:7,  backgroundColor:"green",border:"none"}}>Edit Bioi</button>
      </div>

      <div className=" NotificationsContainer" >
    <h3>Followings</h3>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <p style={{marginLeft:10}}>Friends</p>
      <p style={{marginRight:10, color:"#aaa"}}>See all</p>
      <p></p>
    </div>
    <div style={{display:'flex', flexWrap:'wrap', margginLeft:5}}>
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image1}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Dan Lok</p>
        </div>      
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image2}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Dan Lok</p>
        </div>   
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image3}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Jeff</p>
        </div>   
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image4}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Lew</p>
        </div>   
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image5}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Lew</p>
        </div>  
        <div style={{marginLeft:4, cursor:'pointer'}}>
        <img src={`${image6}`} className='friendimage' alt="" />
        <p style={{marginTop:-2}}>Lew</p>
        </div>  
    </div>
      </div>
    </div>

  )
}

export default ProfileLeftBar