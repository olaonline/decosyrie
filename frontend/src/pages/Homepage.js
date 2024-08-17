import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore Our Latest Products</h1>
          <p className="text-center text-gray-600 mb-12">
            Discover our exclusive collection of products carefully crafted to meet your needs. Browse through and pick the best for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;