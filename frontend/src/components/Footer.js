import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "aos/dist/aos"

const Footer = () => {
  return (
    <footer className="bg-customGreen-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div data-aos="slide-left">
            <h3 className="text-xl font-bold mb-4">DecoSyrie</h3>
            <p className="text-white">
            Decosyrie highlights the artistic and handcrafted quality of the our Syria’s rich cultural heritage, adding authenticity and cultural depth.
            </p>
            {/* <p className="text-white">Email: olaalhaffar@gmail.com</p> */}
            {/* <p className="text-white">Phone: (123) 456-7890</p> */}
          </div>

          {/* Navigation Links */}
          <div data-aos="slide-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/aboutus" className="text-white hover:text-customGreen-50 transition-colors duration-200">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="text-white hover:text-customGreen-50 transition-colors duration-200">Products</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white hover:text-customGreen-50 transition-colors duration-200">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="text-white hover:text-customGreen-50 transition-colors duration-200">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div data-aos="slide-left"> 
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/decosyrie" target='_blank' rel="noreferrer" className="text-white hover:text-customGreen-50 transition-colors duration-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/decosyrie/" target='_blank' rel="noreferrer" className="text-white hover:text-customGreen-50 transition-colors duration-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 text-gray-200">
          © {new Date().getFullYear()} DecoSyrie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;