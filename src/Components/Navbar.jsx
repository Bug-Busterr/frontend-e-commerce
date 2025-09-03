import '../styles/Navbar.css'
import { FaHeart, FaShoppingCart, FaUser, FaSearch,FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const role = localStorage.getItem("role");

  return (
    <>
      <div className='nav-bar'>
        
        <div className="first-nav">

          <div>
            <p>Summer sale for all swim and suits free express Delivary-off 50%! <a href="/">Shop Now</a></p>
          </div>
          <div>
            <select>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>

        <div className='nav-section'>
          <div className='logo'>
            <h3>Execlusive</h3>
          </div>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Contact">Contact</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Signup">SignUp</a></li>
            </ul>
            <div className="search-box">
                <input type='search' placeholder='What are you looking for?' />
                <FaSearch className="search-icon" />
            </div>
            <div className='icons' >
                 <Link to="/Wishlist"><FaHeart/></Link> 
                 <Link to="/cart"><FaShoppingCart /></Link>
                 <Link to={role === "admin" ? "/AdminDashboard" : "/Account"}>
                   <FaUser/>
                 </Link>
            </div>
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </div>
      <hr className='vertical'/>
    </>
  )
}

export default Navbar
