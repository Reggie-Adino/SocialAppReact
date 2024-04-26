import React from 'react'
import "./profileright.css"
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";

const ProfileRightBar = () => {
  return (
    <div className="Profilerightbar">
    <div className="profilerightcontainer">
      <h3>Followers</h3>
      <div style={{marginTop: "10px"}}>
        <div style={{display:'flex',alignItems:'center', marginLeft:10, cursor:'pointer'}}>
        <img src={`${image1}`} className='Friendsimage' alt="" />
        <p style={{textAlign:'start',marginLeft:'10px'}}>Har</p>
        </div>
       
      </div>
      
      <div style={{marginTop: "10px"}}>
        <div style={{display:'flex',alignItems:'center', marginLeft:10, cursor:'pointer'}}>
        <img src={`${image2}`} className='Friendsimage' alt="" />
        <p style={{textAlign:'start',marginLeft:'10px'}}>Har</p>
        </div>
       
      </div>
      <div style={{marginTop: "10px"}}>
        <div style={{display:'flex',alignItems:'center', marginLeft:10, cursor:'pointer'}}>
        <img src={`${image3}`} className='Friendsimage' alt="" />
        <p style={{textAlign:'start',marginLeft:'10px'}}>Har</p>
        </div>
       
      </div>
      <div style={{marginTop: "10px"}}>
        <div style={{display:'flex',alignItems:'center', marginLeft:10, cursor:'pointer'}}>
        <img src={`${image5}`} className='Friendsimage' alt="" />
        <p style={{textAlign:'start',marginLeft:'10px'}}>Har</p>
        </div>
       
      </div>
    </div>

    <div className="rightcontainer2">
      <h3 style={{ marginLeft: "10px", textAlign: "start" }}>
        Suggested for you
      </h3>
      <div style={{ marginTop: "-10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${image2}`} className="Profileimage" alt="" />

            <div>
              <p style={{ marginLeft: "10px", textAlign: "start" }}>Elon Dan</p>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "-16px",
                  textAlign: "start",
                  fontSize: "10px",
                  color: "#aaa",
                }}
              >
                Suggested for you
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#aaa",
              padding: "10px",
              marginRight: "13px",
              borderRadius: "50%",
            }}
          >
            <img src={`${addFriends}`} className="addfriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${image3}`} className="Profileimage" alt="" />

            <div>
              <p style={{ marginLeft: "10px", textAlign: "start" }}>Dan Lok</p>
              <p
                style={{
                  marginLeft: "10px",
                  marginTop: "-16px",
                  textAlign: "start",
                  fontSize: "10px",
                  color: "#aaa",
                }}
              >
               Followed by Suman
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#aaa",
              padding: "10px",
              marginRight: "13px",
              borderRadius: "50%",
            }}
          >
            <img src={`${addFriends}`} className="addfriend" alt="" />
          </div>
        </div>
      </div>

      <div style={{marginTop:"-10px"}}>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
    
            <img src={`${image4}`} className='Profileimage' alt="" />
           
            <div>
            <p style={{marginLeft:'10px', textAlign:'start'}}>James Op</p>
            <p style={{marginLeft:"10px", marginTop:"-16px", textAlign:'start', fontSize:"10px", color:"#aaa"}}>Suggested for you</p>
            </div>
            </div>
            <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'13px', borderRadius:'50%'}}>
          <img src={`${addFriends}`} className='addfriend' alt="" />
          </div>
            </div>
            
          
        </div>

        <div style={{marginTop:"-10px"}}>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
    
            <img src={`${image5}`} className='Profileimage' alt="" />
           
            <div>
            <p style={{marginLeft:'10px', textAlign:'start'}}>Madan Bo</p>
            <p style={{marginLeft:"10px", marginTop:"-16px", textAlign:'start', fontSize:"10px", color:"#aaa"}}>Suggested for you</p>
            </div>
            </div>
            <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'13px', borderRadius:'50%'}}>
          <img src={`${addFriends}`} className='addfriend' alt="" />
          </div>
            </div>
            
          
        </div>

        <div style={{marginTop:"-10px"}}>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
    
            <img src={`${image6}`} className='Profileimage' alt="" />
           
            <div>
            <p style={{marginLeft:'10px', textAlign:'start'}}>Kaji</p>
            <p style={{marginLeft:"10px", marginTop:"-16px", textAlign:'start', fontSize:"10px", color:"#aaa"}}>Suggested for you</p>
            </div>
            </div>
            <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'13px', borderRadius:'50%'}}>
          <img src={`${addFriends}`} className='addfriend' alt="" />
          </div>
            </div>
            
          
        </div>


        {/* <div style={{marginTop:"-10px"}}>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', alignItems:'center'}}>
    
            <img src={`${image7}`} className='Profileimage' alt="" />
           
            <div>
            <p style={{marginLeft:'10px', textAlign:'start'}}>Suman</p>
            <p style={{marginLeft:"10px", marginTop:"-16px", textAlign:'start', fontSize:"10px", color:"#aaa"}}>Suggested for you</p>
            </div>
            </div>
            <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:'13px', borderRadius:'50%'}}>
          <img src={`${addFriends}`} className='addfriend' alt="" />
          </div>
            </div>
            
          
        </div> */}
    </div>
    <div></div>
  </div>
  )
}

export default ProfileRightBar