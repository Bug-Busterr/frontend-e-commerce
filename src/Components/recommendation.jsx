import { FaEye } from "react-icons/fa"
import "../styles/recommendation.css"
import Pic1 from "../assets/images/5.png"
import Pic2 from "../assets/images/6.png"
import Pic3 from "../assets/images/7.png"
import Pic4 from "../assets/images/8.png"

const Recommendation = () => {
  const recommendedItems = [
    { id: 1,
       name: "ASUS FHD Gaming Laptop", 
       price: 960, 
       oldPrice: 1160, 
       img: Pic1 
      },
    { id: 2, 
      name: "IPS LCD Gaming Monitor", 
      price: 1160, 
      img: Pic2 
    },
    { id: 3, 
      name: "HAVIT HV-G92 Gamepad",
      price: 560, img: Pic3 },
    { id: 4, 
      name: "AK-900 Wired Keyboard", 
      price: 200, 
      img: Pic4 
    },
  ]

  return (
    <div className="recommendation-section">
      <div className="recommendation-header">
        <h2 className="title">Just For You</h2>
        <button className="btn">See All</button>
      </div>

      <div className="recommendation-grid">
        {recommendedItems.map((item) => (
          <div className="product-card" key={item.id}>
            <button >
              <FaEye className="eye-btn"/>
            </button>
            <div className="product-img">
            <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p className="price">
              ${item.price}{" "}
              {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
            </p>
            <button className="btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
