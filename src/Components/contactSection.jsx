import "../styles/contactSection.css"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"

const conatctSection = () => {
  return (
    <div className="contact-page">
      <div className="contact-path">
        Home / <span>Contact</span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-block">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h3>Call To Us</h3>
              <p>We are available 24/7, 7 days a week.</p>
              <p className="highlight">Phone: +8801611112222</p>
            </div>
          </div>

          <hr />
          <div className="info-block">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Write To Us</h3>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="highlight">
                Emails: customer@exclusive.com <br />
                support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
              <input type="tel" placeholder="Your Phone *" required />
            </div>

            <textarea placeholder="Your Message" rows="6"></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default conatctSection
