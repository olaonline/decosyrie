import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/logo-sq.png';
import { logoutUser } from '../services/userService';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize state from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null); // Update state immediately
    window.location.reload(); // Refresh to update Header and other components
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <Link to="/" className="flex items-center text-black text-lg font-bold">
          <img src={Logo} alt="Logo" className="h-10 mr-3" />
          <span className="text-xl">DecoSyrie</span>
        </Link>
        <nav className="flex space-x-6 text-lg">
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'
            }
          >
            Cart
          </NavLink>

          {user ? (
            <>
              <span className="text-gray-600">Hello, {user.name}</span>
              <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold'
                : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'
            }
          >
            Orders
          </NavLink>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                Log Out
              </button>
            </>
          ) : (
          <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-600 hover:text-blue-500 transition-colors duration-200'
              }
            >
              Sign In
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;