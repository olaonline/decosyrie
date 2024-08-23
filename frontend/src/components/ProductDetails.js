import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductDetails } from '../services/productService';
import { FaCartPlus } from 'react-icons/fa';
import CartContext from '../context/CartContext'; // Adjust the import path as needed

const ProductDetails = () => {
  const { id } = useParams();  // This `id` comes from the URL parameters
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const data = await fetchProductDetails(id);  // Fetch product data using the ID from URL
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    loadProductDetails();
  }, [id]);

  const addToCart = () => {
    if (!product || !product._id) {  // Check if the product has the correct `_id` field
      alert('Unable to add product to cart: missing product ID');
      return;
    }

    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { 
        id: product._id, 
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
        countInStock: product.countInStock,
      } 
    });

    alert(`${quantity} of ${product.name} added to your cart.`);
    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
    <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">Category: {product.category}</p>
        </div>
      </div>
      
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">€{product.price.toFixed(2)}</p>

          <div className="mb-6">
            <label className="text-gray-600 font-semibold mr-4">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              max={product.countInStock}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded-md p-2 w-16"
            />
          </div>

          <button
            onClick={addToCart}
            disabled={product.countInStock === 0}
            className="flex items-center justify-center bg-customGreen-600 text-white px-4 py-2 rounded-md hover:bg-customGreen-700 transition-colors duration-300 disabled:opacity-50"
          >
            <FaCartPlus className="mr-2" /> Add to Cart
          </button>

          <p className={`mt-4 text-sm ${product.countInStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.countInStock > 0 ? `${product.countInStock} in stock` : 'Out of Stock'}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;