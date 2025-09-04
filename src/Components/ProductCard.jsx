import { FaEye, FaHeart, FaStar, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../styles/productCard.css';
import { useWishlist } from "../Components/WishlistContext";

function ProductCard({ id, img, name, oldPrice, newPrice, discount }) {
  const { addToWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart();

  const isWished = wishlist.some((item) => item.id === id);

  const handleWishlistClick = () => {
    const product = { id, img, name, price: newPrice };
    addToWishlist(product);
  };

  const handleAddToCart = () => {
    const productToAdd = { id, name, price: newPrice, img, qty: 1 };
    addToCart(productToAdd);
  };

  return (
    <div className="product-card" key={id}>
      <div className="product-img">
        <img src={img} alt={name} />
        <button className="icon" onClick={handleWishlistClick}>

          {isWished ? <FaHeart color="red" /> : <FaRegHeart className="heart icon" />}
        </button>

        <Link to={`/product/${id}`}>
          <FaEye className="icon eye" />
        </Link>
      </div>

      <button className="add-btn" onClick={handleAddToCart}>
        Add to cart
      </button>

      <h3>{name}</h3>

      <p className="price">
        <span className="old-price">${oldPrice}</span>{" "}
        <span className="new-price">${newPrice}</span>
        {discount && <span className="discount">-{discount}%</span>}
      </p>

      <div className="rating">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        <span>(100)</span>
      </div>
    </div>
  );
}

export default ProductCard;
