import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/UserOrder.css';


function UserOrder() {
    const orderNumber = 'EC123456789'; // Replace with a real order number from your API

    return (
        <>
            <Navbar />
            <div className="order-confirmation-container">
                <div className="confirmation-header">
                    <FaCheckCircle className="confirmation-icon" />
                    <h2>Congratulations! Your Order is Confirmed. 🎉</h2>
                    <p>Thank you for your purchase. A confirmation email with your order details will be sent to you shortly.</p>
                </div>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-details">
                        <div className="detail-row">
                            <span>Order Number:</span>
                            <span className="bold-text">{orderNumber}</span>
                        </div>
                        <div className="detail-row">
                            <span>Order Date:</span>
                            <span>{new Date().toLocaleDateString('en-US')}</span>
                        </div>
                        <div className="detail-row">
                            <span>Total:</span>
                            <span className="bold-text">$120.00</span> {/* Replace with the real total */}
                        </div>
                        <div className="detail-row">
                            <span>Payment Method:</span>
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                </div>

                <div className="next-steps">
                    <h3>What's Next?</h3>
                    <ul>
                        <li><strong>Processing:</strong> We are preparing your order for shipping.</li>
                        <li><strong>Tracking:</strong> A tracking number will be sent to your email within 24 hours.</li>
                        <li><strong>Estimated Delivery:</strong> Your order is expected to arrive within 3-5 business days.</li>
                    </ul>
                </div>

                <div className="cta-buttons">
                    <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
                    <Link to="/contact" className="contact-us-btn">Contact Us</Link>
                </div>
            </div>
        </>
    );
}

export default UserOrder;