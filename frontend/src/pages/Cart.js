import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext'; // Adjust the import path as needed

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/checkout');
    } else {
      alert('You need to be logged in to proceed to checkout.');
      navigate('/login');
    }
  };

  if (cart.length === 0) {
    return <>
          <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Cart</h1>
          <p className="text-2xl mb-6">A beautifully organized cart, ready for checkout.</p>
        </div>
      </div>
      <div className="container mx-auto p-4">Your cart is empty.</div>
      </>;
  }

  return (
    <>
    <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Cart</h1>
          <p className="text-2xl mb-6">A beautifully organized cart, ready for checkout.</p>
        </div>
      </div>
      
    <div className="container mx-auto p-4">
        
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded-lg mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600">€ {item.price.toFixed(2)} x {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Total: €{getTotalPrice()}</h2>
        <button
          onClick={handleCheckout}
          className="mt-4 bg-customGreen-600 text-white px-4 py-2 rounded-md hover:bg-customGreen-700 transition-colors duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
    </>
  );
};

export default Cart;