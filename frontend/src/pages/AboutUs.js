import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      offset: 200, // offset (in px) from the original trigger point
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="about-us-container bg-white ">
      <div className="hero-section flex items-center justify-center bg-slate-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">About Us</h1>
          <p className="text-2xl mb-6">Creating Spaces That Inspire</p>
        </div>
      </div>
    <div className="about-us-container bg-gray-50 text-gray-900">
    <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-center">
          <div className="text-section p-24" data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              At Decosyrie, we believe in crafting environments that inspire creativity and comfort. We curate unique pieces that transform spaces into reflections of personal style.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Whether it's modern minimalism or timeless classics, our products are designed to blend functionality with aesthetics, helping you create spaces that feel like home.
            </p>
          </div>
          <div className="image-section" data-aos="fade-left">
            <img src={require('../assets/about.png')} alt="3D Design" className="w-4/5 rounded-lg transition-transform transform hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="parallax-section bg-fixed bg-cover bg-center text-center py-40" style={{ backgroundImage: `url(${require('../assets/hero.jpg')})` }}>
        <div data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Innovation in Every Detail</h2>
          <p className="text-xl max-w-2xl mx-auto text-white">
            Our designs are not just about aesthetics, but about bringing innovative solutions that make your life easier and your spaces more enjoyable.
          </p>
        </div>
      </div>

      <div className="cta-section text-center py-20" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Join Us on Our Journey</h2>
        <p className="text-xl mb-8 text-gray-600">
          Let's create something beautiful together. Explore our latest collections and find the perfect pieces to complement your style.
        </p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;