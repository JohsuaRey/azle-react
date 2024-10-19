import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 560);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'bg-green-600 p-4 shadow-md fixed w-full z-50' : ''} `}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">GreenFuture</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition duration-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition duration-300">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-green-700 mt-2 space-y-2 p-2 rounded transition duration-300 ease-in-out">
          <a href="#home" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition duration-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition duration-300">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
