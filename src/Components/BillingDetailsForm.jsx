import React from 'react';
import '../styles/Checkout.css'; 

function BillingDetailsForm() {
  return (
    <div className="billing-details">
      <h3>Billing Details</h3>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" />
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">Street Address*</label>
          <input type="text" id="streetAddress" name="streetAddress" required />
        </div>

        <div className="form-group">
          <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
          <input type="text" id="apartment" name="apartment" />
        </div>

        <div className="form-group">
          <label htmlFor="townCity">Town/City*</label>
          <input type="text" id="townCity" name="townCity" required />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="save-info">
          <input type="checkbox" id="saveInfo" name="saveInfo" />
          <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
        </div>
      </form>
    </div>
  );
}

export default BillingDetailsForm;