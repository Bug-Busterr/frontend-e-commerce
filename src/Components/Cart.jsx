
import "../styles/cart.css";
import Navbar from "../Components/Navbar.jsx";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "./CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty, fetchCart } = useCart();

  const coupons = { SAVE10: 0.1, SAVE20: 0.2 };
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");
  const [isValidCoupon, setIsValidCoupon] = useState(null);

  const handleQtyChange = (id, change) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      const newQty = Math.max(1, item.qty + change);
      updateQty(id, newQty);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (coupons[code]) {
      setDiscount(coupons[code]);
      setMessage(`Coupon applied: ${code} (${coupons[code] * 100}% OFF)`);
      setIsValidCoupon(true);
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code");
      setIsValidCoupon(false);
    }
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountValue = subtotal * discount;
  const total = subtotal - discountValue;

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <p className="breadcrumb">
          Home / <span>Cart</span>
        </p>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="product-cell">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td className="quantity-cell">
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQtyChange(item.id, -1)}
                      disabled={item.qty <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleQtyChange(item.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-btn"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-buttons">
          <Link to="/" className="btn-outline">Return To Shop</Link>
          <button className="btn-outline" onClick={fetchCart}>Update Cart</button>
        </div>

        <div className="cart-footer">
          <div className="coupon-box">
            <div className="coupon-inputs">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn-red" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
            </div>

            {message && (
              <p className={`coupon-message ${isValidCoupon ? "success" : "error"}`}>
                {message}
              </p>
            )}
          </div>

          <div className="cart-total">
            <h3>Cart Total</h3>
            <div className="row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="row">
              <span>Discount:</span>
              <span>- ${discountValue.toFixed(2)}</span>
            </div>
            <div className="row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="row total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/Checkout" className="btn-red full">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
