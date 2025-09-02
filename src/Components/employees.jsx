import Img1 from "../assets/images/employee1.png"
import Img2 from "../assets/images/employee2.png"
import Img3 from "../assets/images/employee3.png"
import "../styles/employees.css"
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa"

const employees = () => {
  return (
    <div className='employees'>
      <div className='box'>
        <img src={Img1}></img>
        <h3>Tom Cruise</h3>
        <p>Founder & Chairman</p>
        <div className='icons'>
        <FaFacebookF/><FaInstagram/><FaTwitter/>
        </div>
      </div>

      <div className='box'>
      <img src={Img2}></img>
        <h3>Ema Watson</h3>
        <p>Managing Director</p>
        <div className='icons'>
        <FaFacebookF/><FaInstagram/><FaTwitter/>
        </div> 
      </div> 
          
      <div className='box'>
      <img src={Img3}></img>
        <h3>Will Smith</h3>
        <p>Product Designer</p>
        <div className='icons'>
        <FaFacebookF/><FaInstagram/><FaTwitter/>
        </div>
      </div>
      
      <div className='box'>
        
      </div>
    </div>
  )
}

export default employees
