import { useContext } from 'react';
import CartContext from '../context/CartContext';

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext); // Added dispatch

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return { cart, dispatch, getTotalPrice }; 
};