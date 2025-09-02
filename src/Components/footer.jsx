import "../styles/footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn ,FaArrowRight} from "react-icons/fa"
import GooglePlay from "../assets/images/GooglePlay.png"
import AppStore from "../assets/images/AppStore.png"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-item">
          <h4>Exclusive</h4>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="submit-btn">
              <FaArrowRight/>
              </button>
          </div>
        </div>

        <div className="footer-item">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-item">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-item">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="download-app">
            <div>
              <img src={GooglePlay} alt="Google Play" />
              <img src={AppStore} alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer
