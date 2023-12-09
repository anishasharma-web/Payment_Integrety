// components/Payment/PaymentForm.js
import React, { useState } from 'react';
import { makePayment } from '../../services/PaymentService';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentMode: '',
    amount: '',
    referenceNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.paymentMode.trim()) {
      newErrors.paymentMode = 'Payment Mode is required';
      isValid = false;
    }

    if (!formData.amount.trim()) {
      newErrors.amount = 'Amount is required';
      isValid = false;
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.amount)) {
      newErrors.amount = 'Invalid amount format';
      isValid = false;
    }

    if (!formData.referenceNumber.trim()) {
      newErrors.referenceNumber = 'Reference Number is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleMakePayment = async (e) => {
    e.preventDefault();

    try {
      if (validateForm()) {
        await makePayment(formData);
        alert('Payment successful!');
        // Optionally, reset the form or navigate to a payment success page
      } else {
        alert('Please check the form for errors.');
      }
    } catch (error) {
      console.error('Error making payment:', error);
      alert('Payment failed. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <form onSubmit={handleMakePayment}>
        {/* Payment Mode */}
        <div>
          <label>
            Payment Mode:
            <input
              type="text"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
            />
            <span className="error">{errors.paymentMode}</span>
          </label>
        </div>

        {/* Amount */}
        <div>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <span className="error">{errors.amount}</span>
          </label>
        </div>

        {/* Reference Number */}
        <div>
          <label>
            Reference Number:
            <input
              type="text"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
            />
            <span className="error">{errors.referenceNumber}</span>
          </label>
        </div>

        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;