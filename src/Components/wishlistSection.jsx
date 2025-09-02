import { FaTrash } from "react-icons/fa"
import "../styles/wishlistSection.css" 
import "../styles/wishlistCard.css"
import Pic1 from "../assets/images/1.png"
import Pic2 from "../assets/images/2.png"
import Pic3 from "../assets/images/3.png"
import Pic4 from "../assets/images/4.png"

const WishlistSection = () => {
  const wishlistItems = [
    { id: 1,
      name: "Gucci duffle bag", 
      price: 960, oldPrice: 1160, 
      img: Pic1 
    },
    { id: 2, 
      name: "RGB Liquid CPU Cooler", 
      price: 1960, 
      img: Pic2 
    },
    { id: 3, 
      name: "GPI Shooter USB Gamepad", 
      price: 550, 
      img: Pic3 
    },
    { id: 4, 
      name: "Quilted Satin Jacket", 
      price: 750, 
      img: Pic4
    },
  ]

  return (
    <div className="wishlist-section">
      <div className="wishlist-header">
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button className="btn">Move All To Bag</button>
      </div>

      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div className="product-card" key={item.id}>
            <button >
              <FaTrash className="remove-btn"/>
            </button>
            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">
                ${item.price}{" "}
                {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
              </p>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishlistSection
