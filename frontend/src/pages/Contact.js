import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'; // Import your custom styles

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="contact-page">
              <div className="hero-section flex items-center justify-center bg-customGrey-200 h-56" data-aos="fade-up">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-2xl mb-6">We are here to serve you!</p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        {/* Google Map Section */}
        <section className="map-section" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82126.31592488283!2d8.160131198970777!3d49.96546824205379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd912e33df1379%3A0x422d4d510db1ba0!2sMainz!5e0!3m2!1sen!2sde!4v1724351617797!5m2!1sen!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="info-section my-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Contact Information</h2>
          <div className="info-container">
            <div className="info-card" data-aos="fade-up">
              <div className="icon-container">
                <FaMapMarkerAlt className="icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
              <p className="text-gray-600">Mainz, Germany</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-container">
                <FaPhone className="icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+49 1 456-7890</p>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-container">
                <FaEnvelope className="icon" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">olaalhaffar@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="form-section my-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Get in Touch</h2>
          <form className="contact-form bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-md" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-md" />
              </div>
            </div>
            <div className="form-group my-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-customGreen-600 text-white px-6 py-3 rounded-md hover:bg-customGreen-700 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
