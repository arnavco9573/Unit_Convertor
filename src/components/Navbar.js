import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-700 to-gray-950 text-white flex flex-col md:flex-row justify-between mx-auto p-2 md:p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">My App</Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/unit-conversion" className="text-white">Unit Conversion</Link></li>
        </ul>
      )}

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/unit-conversion" className="text-white">Unit Conversion</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
