import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import backgroundImage from '../assets/plantback.jpg'; // Adjust the path as needed

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative w-full">
          <div
            className={`fixed flex justify-between items-center px-8 shadow-lg rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-2 h-20 ${
              scrolled ? 'w-1/2 bg-[#C6B9CD]' : 'w-3/4 bg-transparent'
            }`}
            style={{ 
              top: scrolled ? '10px' : '20px',
            }}
          >
            <Link to="/" className="text-slate-50 text-2xl font-bold">PLANT</Link>
            <div className="flex gap-8">
              <NavLink to="/" className="text-slate-50 text-2xl">Home</NavLink>
              <NavLink to="/#about" className="text-slate-50 text-2xl">About</NavLink>
              <NavLink to="/chatbot" className="text-slate-50 text-2xl">ChatBot</NavLink>
              <NavLink to="/#article" className="text-slate-50 text-2xl">Article</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;