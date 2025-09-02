import React from 'react'
import "../styles/aboutInfo.css"
import Img1 from "../assets/images/Services3.png"
import Img2 from "../assets/images/Services4.png"
import Img3 from "../assets/images/Services5.png"
import Img4 from "../assets/images/Services6.png"

const aboutInfo = () => {
  return (
    <div className='about-info'>
      <div className='box'>
        <img src={Img1} ></img>
        <h4>10.5k</h4>
        <p>Sallers active our site</p>
      </div>
      
      <div className='red-box'>
        <img src={Img2} ></img>
        <h4>33k</h4>
        <p>Monthly Products Sale</p>
      </div>
      
      <div className='box'>
        <img src={Img3} ></img>
        <h4>45.5k</h4>
        <p>Costumer active in our site</p>
      </div>
      
      <div className='box'>
        <img src={Img4} ></img>
        <h4>25k</h4>
        <p>Active gross sale in our site</p>
      </div>
    </div>
  )
}

export default aboutInfo
