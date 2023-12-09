// services/PaymentService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export const makePayment = async (paymentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/payments`, paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
