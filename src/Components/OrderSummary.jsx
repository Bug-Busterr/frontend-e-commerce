import '../styles/checkout.css'; 
import { useCart } from '../components/CartContext'; 
import { useNavigate } from "react-router-dom";
function OrderSummary() {

  const { cart } = useCart();
const navigate = useNavigate();
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="order-summary">
      <h3>Your Order</h3>
      <div className="product-list">
        
        {cart.map(item => (
          <div className="product-item" key={item.id}>
            <span className="product-name">
              <img src={item.img} alt={item.name} className="product-image" />
              {item.name} x {item.qty} 
            </span>
            
            <span className="product-price">${item.price * item.qty}</span>
          </div>
        ))}
      </div>
      
      <div className="order-details">
        <div className="detail-row">
          <span>Subtotal:</span>
        
          <span>${subtotal}</span>
        </div>
        <div className="detail-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="detail-row total-row">
          <span>Total:</span>
          
          <span>${subtotal}</span>
        </div>
      </div>

      <div className="payment-options">
        <div className="payment-method">
          <input type="radio" id="bank" name="payment" value="bank" defaultChecked />
          <label htmlFor="bank">Bank</label>
        </div>
        <div className="payment-method">
          <input type="radio" id="cash" name="payment" value="cash" />
          <label htmlFor="cash">Cash on delivery</label>
        </div>
      </div>

      <div className="coupon-code">
        <input type="text" placeholder="Coupon Code" />
        <button className="apply-coupon-btn">Apply Coupon</button>
      </div>

      <button className="place-order-btn" onClick={() => navigate('/UserOrder')}>Place Order</button>
    </div>
  );
}

export default OrderSummary;