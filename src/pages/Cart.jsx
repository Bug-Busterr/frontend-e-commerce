import React, { useState } from "react";
import "../styles/cart.css";
import Navbar from '../components/Navbar'
const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "LCD Monitor", price: 650, qty: 1,img: "https://picsum.photos/60/60"
 },
    { id: 2, name: "HI Gamepad", price: 550, qty: 2, img: "https://picsum.photos/60/60"
 },
  ]);

  const handleQtyChange = (id, newQty) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: parseInt(newQty) } : item
    ));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <p className="breadcrumb">Home / <span>Cart</span></p>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td className="product-cell">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <select
                  value={item.qty}
                  onChange={(e) => handleQtyChange(item.id, e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-buttons">
        <button className="btn-outline">Return To Shop</button>
        <button className="btn-outline">Update Cart</button>
      </div>

      <div className="cart-footer">

        <div className="coupon-box">
          <input type="text" placeholder="Coupon Code" />
          <button className="btn-red">Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h3>Cart Total</h3>
          <div className="row">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="row total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="btn-red full">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
