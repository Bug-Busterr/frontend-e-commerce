import BillingDetailsForm from '../components/BillingDetailsForm.jsx';
import OrderSummary from '../components/OrderSummary.jsx';
import Navbar from '../components/Navbar.jsx'

function Checkout() {
  return (
    <>
    <Navbar/>
    <div className="checkout-container">
      <h2 className="page-title">Checkout</h2>
      <div className="checkout-content">
        <BillingDetailsForm />
        <OrderSummary />
      </div>
    </div>
    </>
  );
}

export default Checkout;