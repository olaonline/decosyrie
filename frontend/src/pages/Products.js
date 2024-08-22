import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
        setCategories(['All', ...uniqueCategories]);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    loadProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-us-container bg-white ">
    <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4" >Products</h1>
          <p className="text-2xl mb-6">Explore Our Products</p>
        </div>
      </div>
      <div className="container mx-auto p-4">
    <br/>
        <div className="mb-8" data-aos="fade-down">
          <div className="flex justify-center space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-white font-semibold ${selectedCategory === category ? 'bg-customGreen-600' : 'bg-gray-600 hover:bg-gray-700'} transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-gray-600">
            Discover our exclusive collection of products carefully crafted to meet your needs. Browse through and pick the best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;