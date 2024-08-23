import React, { useEffect, useState } from 'react';
import { fetchOrderDetails } from '../services/OrderService'; // Adjust import path as needed
import { useParams } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const orderData = await fetchOrderDetails(orderId);
        setOrder(orderData);
      } catch (err) {
        setError('Failed to fetch order details');
      } finally {
        setLoading(false);
      }
    };

    getOrderDetails();
  }, [orderId]);

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  if (!order) return <div className="container mx-auto p-4">Order not found.</div>;

  return (
    <>
          <div className=" hero-section ">
              <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Order Details</h1>
          <p className="text-2xl mb-6">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
      </div></div>
    
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-4" data-aos="slide-right">Order Details</h1> */}
      <div className="bg-white p-4 rounded-lg shadow-md" data-aos="slide-right">
        <h2 className="text-xl font-semibold mb-2">Order #{order._id}</h2>
        <p className="text-gray-600 mb-2">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2">Total Price: €{order.Price.toFixed(2)}</p>
        <p className="text-gray-600 mb-2">Payment Method: {order.paymentMethod}</p>
        <p className="text-gray-600 mb-2">Status: {order.isPaid ? 'Paid' : 'Pending'}</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Shipping Address</h3>
        <p>{order.shippingAddress.address}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
        <p>{order.shippingAddress.country}</p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Order Items</h3>
        <div className="space-y-2">
          {order.orderItems.map(item => (
            <div key={item._id} className="flex items-center p-2 border rounded-md shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.name} className="h-20 w-20 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h4 className="text-md font-semibold">{item.name}</h4>
                <p className="text-gray-600">Qty: {item.qty}</p>
                <p className="text-gray-600">Price: €{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default OrderDetailsPage;