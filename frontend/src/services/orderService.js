import axios from 'axios';

const API_URL = 'http://localhost:5001/api/orders';

export const createOrder = async (orderData) => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.post(API_URL, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const fetchUserOrders = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${API_URL}/myorders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};

export const fetchOrderDetails = async (orderId) => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.get(`${API_URL}/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching order details:', error);
    throw error;
  }
};