import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state, action.payload];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    case 'REMOVE_FROM_CART':
      const filteredCart = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(filteredCart));
      return filteredCart;
    case 'INITIALIZE_CART':
      return action.payload;
      case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({ type: 'INITIALIZE_CART', payload: savedCart });
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;