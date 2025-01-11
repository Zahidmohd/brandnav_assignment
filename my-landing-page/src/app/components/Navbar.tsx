import React from 'react';
import Image from 'next/image'; // For optimized images

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md"> 
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} /> 
          <span className="ml-2 text-xl font-bold text-gray-800">Your Brand</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Features</a></li>
          <li><a href="#" className="text-gray-800 hover:text-blue-500">Pricing</a></li>
          {/* ... more links */}
        </ul>

        {/* Call to Action Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;