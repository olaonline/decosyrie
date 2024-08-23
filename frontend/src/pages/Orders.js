import React, { useEffect, useState } from 'react';
import { fetchUserOrders } from '../services/OrderService'; // Adjust import path as needed
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import './custom.css';


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page

    const getOrders = async () => {
      try {
        const ordersData = await fetchUserOrders();
        setOrders(ordersData);
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-600">{error}</div>;

  return (

      <>
      <div className=" hero-section ">
              <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Orders</h1>
          <p className="text-2xl mb-6">All your purchases with detailed insights</p>
        </div>
      </div></div>

    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4" data-aos="slide-up">My Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center text-gray-600">You have no orders yet.</div>
      ) : (
        <div className="space-y-4" data-aos="slide-left">
          {orders.map(order => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Order #{order._id}</h2>
              <p className="text-gray-600 mb-2">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-2">Total Price: €{order.Price.toFixed(2)}</p>
              <p className="text-gray-600 mb-2">Status: {order.isPaid ? 'Paid' : 'Pending'}</p>
              <button
                onClick={() => navigate(`/orders/${order._id}`)}
                className="mt-4 bg-customGreen-600 text-white px-4 py-2 rounded-md hover:bg-customGreen-700 transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default OrdersPage;