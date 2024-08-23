import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import

const API_URL = 'https://decosyrie.onrender.com/api/users';
// const API_URL = 'https://localhost:5001/api/users';

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (user) => {
    try {
      const response = await axios.post(`${API_URL}/login`, user);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify({
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          isAdmin: response.data.isAdmin,
        }));
      }
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const decodedToken = jwtDecode(token); // Decode the token using the named export
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const logoutUser = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };