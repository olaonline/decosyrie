import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom.css';

function Privacy() {
  return (
    <div className="about-us-container bg-white">
      <div
        className="hero-section flex items-center justify-center bg-customGrey-200 h-56"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-2xl mb-6">Here you can read our policy</p>
        </div>
      </div>
      <div className="cta-section text-left py-20 p-20" data-aos="zoom-in">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Introduction</h2>
        <p className="text-xl mb-8 text-gray-600">
          Welcome to Decosyrie! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website [decosyrie.com](http://decosyrie.com). By using our site, you consent to the data practices described in this policy.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Information We Collect</h2>
        <p className="text-xl mb-8 text-gray-600">
          We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us. This information may include personal details such as your name, email address, phone number, and payment information. We may also collect data about your browsing behavior on our site, such as IP addresses and cookies.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How We Use Your Information</h2>
        <p className="text-xl mb-8 text-gray-600">
          We use the information we collect to process transactions, improve our website, and communicate with you about your orders and our services. This includes sending you promotional materials and updates that you have opted into. We may also use your information to analyze usage patterns and enhance user experience.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sharing Your Information</h2>
        <p className="text-xl mb-8 text-gray-600">
          We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting business, or servicing you, provided that these parties agree to keep your information confidential. We may also disclose your information to comply with legal obligations or to protect our rights.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Cookies and Tracking Technologies</h2>
        <p className="text-xl mb-8 text-gray-600">
          Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and track your usage of our site. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Data Security</h2>
        <p className="text-xl mb-8 text-gray-600">
          We implement a variety of security measures to protect your personal information. This includes using secure servers and encryption technologies to safeguard your data. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Rights</h2>
        <p className="text-xl mb-8 text-gray-600">
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:olaalhaffar@gmail.com" className="text-blue-500 hover:underline">olaalhaffar@gmail.com</a>. We will respond to your request within a reasonable timeframe.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Changes to This Privacy Policy</h2>
        <p className="text-xl mb-8 text-gray-600">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to periodically review this page for any updates. Your continued use of our website constitutes your acceptance of any changes to this policy.
        </p>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-xl mb-8 text-gray-600">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:olaalhaffar@gmail.com" className="text-blue-500 hover:underline">olaalhaffar@gmail.com</a>. We are here to help and will respond to your inquiries as promptly as possible.
        </p>
      </div>
      <div
        className="parallax-section bg-fixed bg-cover bg-center text-center py-40"
        style={{ backgroundImage: `url(${require("../assets/hero.jpg")})` }}
      >
        <div data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Innovation in Every Detail
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white">
            Our designs are not just about aesthetics, but about bringing innovative solutions that make your life easier and your spaces more enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
