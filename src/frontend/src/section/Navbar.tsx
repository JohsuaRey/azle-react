import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-3xl">GreenFuture</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="lg:flex lg:space-x-4 mt-4 lg:mt-0 text-white">
            <li>
              <a href="#home" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-4 hover:bg-blue-700 rounded">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 hover:bg-blue-700 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
