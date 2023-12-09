// services/BillService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export const getAllBills = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bills`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBillById = async (billId) => {
  try {
    const response = await axios.get(`${BASE_URL}/bills/${billId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addBill = async (billData) => {
  try {
    const response = await axios.post(`${BASE_URL}/bills`, billData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBill = async (billId, updatedBillData) => {
  try {
    const response = await axios.put(`${BASE_URL}/bills/${billId}`, updatedBillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBill = async (billId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/bills/${billId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
