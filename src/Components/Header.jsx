import Navbar from '../components/Navbar'
import { FaApple } from "react-icons/fa";
import '../styles/Header.css';

function Header() {
  return (
    <>
      <Navbar />
      <div className='header-container'>
        <div className="slide">
          <div className="slide-content">
            <div style={{ fontSize: "60px", color: "#fff", display: 'flex', alignItems: 'center' }}>
              <FaApple />
              <span style={{ fontSize: "20px", color: "#fff", marginLeft: '20px' }}>Iphone 14 Series</span>
            </div>

            <h2>Up to 10% off Voucher</h2>
            <p>Get the latest iPhone 14 now with special discount.</p>
            <button>Shop Now</button>
          </div>
          <div className="slide-image">
            <img src="/img/hero_endframe__cvklg0xk3w6e_large 2.png" alt="iPhone 14" />
          </div>
        </div>
      </div>
    </>
  )

}

export default Header;
