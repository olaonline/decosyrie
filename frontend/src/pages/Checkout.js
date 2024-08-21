import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../services/OrderService';
import { useCart } from '../hooks/useCart'; // Custom hook for cart management
import CartContext from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useCart(); // Get cart items and total price from custom hook
  const { dispatch } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); // Adjust based on actual payment method
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You need to be logged in to complete the purchase.');
      navigate('/login');
      setLoading(false);
      return;
    }

    try {
      const orderData = {
        orderItems: cart.map(item => ({
          name: item.name,
          qty: item.quantity,
          image: item.image,
          price: item.price,
          product: item.id, // Ensure product ID is included here
        })),
        shippingAddress: {
          address,
          city,
          postalCode,
          country,
        },
        paymentMethod, // You may want to use a payment gateway to handle payments securely
        Price: getTotalPrice(),
      };

      await createOrder(orderData);
      alert('Order placed successfully!');
      
      // Clear the cart after placing the order
      dispatch({ type: 'CLEAR_CART' });

      navigate('/'); // Redirect to home or order confirmation page
    } catch (error) {
      alert('Error placing order');
      console.error('Error placing order:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Information</label>
          <input
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ${loading ? 'bg-blue-400' : ''}`}
        >
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;