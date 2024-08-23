import React from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCard = ({ product }) => {
  return (
    <div data-aos="flip-left" className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">€ {product.price.toFixed(2)}</p>
        <NavLink 
          to={`/product/${product._id}`} 
          className="mt-4 inline-block bg-customGreen-600 text-white px-4 py-2 rounded-md hover:bg-customGreen-700 transition-colors duration-300"
        >
          View Details
        </NavLink>
              </div>
    </div>
  );
};

export default ProductCard;