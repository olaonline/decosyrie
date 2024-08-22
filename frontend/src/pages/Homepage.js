import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure correct import
import { Link } from 'react-router-dom';
import './Homepage'

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
      {/* Hero Slider */}
      <section className="hero-slider">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
          <div>
            <img src={require('../assets/slider1.jpg')} alt="Slider 1" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Transform Your Occasions</h2>
              <p className="text-lg">Explore our exclusive services of Catering.</p>
            </div>
          </div>
          <div>
            <img src={require('../assets/slider2.jpg')} alt="Slider 2" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Fresh Homepage Flavor</h2>
              <p className="text-lg">A delightful treat crafted with care.</p>
            </div>
          </div>
          <div>
            <img src={require('../assets/slider3.jpg')} alt="Slider 3" />
            <div className="legend">
              <h2 className="text-4xl font-bold">A vintage finish with gold accents</h2>
              <p className="text-lg">Add a touch of elegance to any setting.</p>
            </div>
          </div>
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="my-12">
        <div className="bg-white p-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-section p-24" data-aos="fade">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">About us</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                At Decosyrie, we believe in crafting environments that inspire creativity and comfort. We curate unique pieces that transform spaces into reflections of personal style.
              </p>
              <Link to="/aboutus" className="text-customGreen-600 hover:text-customGreen-800 font-semibold">
                Read More
              </Link>
            </div>
            <div className="image-section" data-aos="fade">
              <img src={require('../assets/about.png')} alt="3D Design" className="w-3/5 rounded-lg transition-transform transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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

      {/* Contact Us Section */}
      <section className="my-12 flex justify-center items-center">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have any questions or concerns? We’re here to help. Reach out to us anytime, and we’ll get back to you as soon as possible.
          </p>
          <Link
            to="/contact"
            className="bg-customGreen-600 text-white px-4 py-2 rounded-md hover:bg-customGreen-700 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
