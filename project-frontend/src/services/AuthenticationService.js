// services/AuthenticationService.js
import axios from 'axios';

// const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend API URL

// // Function to register a new user
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`/register`, userData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// JSONPlaceholder URL for POST requests
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    // Use the JSONPlaceholder /posts endpoint for testing POST requests
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to check if a user is authenticated
export const isAuthenticated = () => {
  // Example: Check if a token is present in the session storage
  return !!sessionStorage.getItem('authToken');
};

// Function to log out a user
export const logoutUser = () => {
  // Example: Clear the token from session storage upon logout
  sessionStorage.removeItem('authToken');
};

// Function to get the user's profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update the user's profile
export const updateProfile = async (updatedProfile) => {
  try {
    const response = await axios.put(`${BASE_URL}/profile`, updatedProfile);
    return response.data;
  } catch (error) {
    throw error;
  }
};
