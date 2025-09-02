import "../styles/banner.css"
import bannerImg from "../assets/images/Frame 694.png"

function HeroBanner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p className="banner-tag">Categories</p>
        <h1 className="banner-title">
          Enhance Your <br /> Music Experience
        </h1>

        <div className="timer">
          <div><span>23</span><p>Hours</p></div>
          <div><span>05</span><p>Days</p></div>
          <div><span>59</span><p>Minutes</p></div>
          <div><span>35</span><p>Seconds</p></div>
        </div>

        <button className="banner-btn">Buy Now!</button>
      </div>

      <div className="banner-image">
        <img src={bannerImg} alt="Banner" />
      </div>
    </section>
  );
}

export default HeroBanner
