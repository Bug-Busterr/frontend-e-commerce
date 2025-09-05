import { FaTrash } from "react-icons/fa";
import "../styles/wishlistSection.css";
import "../styles/wishlistCard.css";
import { useWishlist } from "../Components/WishlistContext";
import { useCart } from "../Components/CartContext";


const WishlistSection = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  

  const handleMoveToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      img: item.img,
      price: item.price,
    });
   
    removeFromWishlist(item.id); 
  };

  return (
    <div className="wishlist-section">
      <div className="wishlist-header">
        <h2>Wishlist ({wishlist.length})</h2>
        <button className="btn">Move All To Bag</button>
      </div>

      <div className="wishlist-grid">
        
        {wishlist.map((item) => (
          <div className="product-card" key={item.id}>
            <button onClick={() => removeFromWishlist(item.id)}>
              <FaTrash className="remove-btn" />
            </button>
            <div className="product-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">
                ${item.price}
                {item.oldPrice && (
                  <span className="old-price">${item.oldPrice}</span>
                )}
              </p>
            <button className="btn" onClick={() => handleMoveToCart(item)}>
              Add To Cart
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistSection;