import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/plantback.jpg'; // Adjust the path as needed

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        className="bg-cover bg-center h-full relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative w-full">
          <div
            className={`fixed flex justify-between items-center px-4 md:px-8 shadow-lg rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:-translate-y-2 h-16 md:h-20  ${
              scrolled ? 'w-11/12 md:w-1/2 bg-[#A8B18F] text-white' : 'w-11/12 md:w-3/4 bg-transparent'
            }`}
            style={{ 
              top: scrolled ? '10px' : '20px',
            }}
          >
            <Link to="/" className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-[#166434]'}`}>PLANT</Link>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className={`text-2xl ${scrolled ? 'text-white' : 'text-[#166434]'}`}>
                ☰
              </button>
            </div>
            <div className={`md:flex gap-4 md:gap-8 ${menuOpen ? 'flex flex-col absolute top-full right-0 mt-2 bg-[#C6B9CD] p-4 rounded-lg' : 'hidden'}`}>
              <NavLink to="/" className={`text-lg md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-[#166434]'}`}>Home</NavLink>
              <NavLink to="/#about" className={`text-lg md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-[#166434]'}`}>About</NavLink>
              <NavLink to="/chatbot" className={`text-lg md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-[#166434]'}`}>ChatBot</NavLink>
              <NavLink to="/#article" className={`text-lg md:text-2xl font-bold ${scrolled ? 'text-white' : 'text-[#166434]'}`}>Article</NavLink>
            </div>
          </div>
        </div>
        
        {/* Content container */}
        <div className={`absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-8 md:px-16 transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Plant disease detector content */}
          <div className="w-2/3 max-w-2xl bg-white bg-opacity-90 p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Plant Disease Detector</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Unlock the power of AI to keep your plants healthy! Our advanced Plant Disease Detector 
              uses cutting-edge technology to identify and diagnose plant diseases with incredible accuracy. 
              Simply snap a photo of your plant, and let our AI do the rest.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li className="mb-2">Instant disease identification</li>
              <li className="mb-2">Detailed treatment recommendations</li>
              <li className="mb-2">Extensive database of plant species</li>
              <li>Regular updates for improved accuracy</li>
            </ul>
            <p className="text-green-700 font-semibold mb-4">
              Start your journey to healthier plants today!
            </p>
            <button
              onClick={() => navigate('/chatbot')}
              className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white font-bold py-4 px-8 rounded-full border-2 border-green-500 hover:border-transparent shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 group"
            >
              <span className="text-2xl mr-3 group-hover:animate-bounce">🌿</span>
              <span className="text-xl">Chat with PlantBot</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;