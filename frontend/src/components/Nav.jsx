import React from 'react';
import backgroundImage from '../assets/plantback.jpg'; // Adjust the path as needed

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative w-full">
          <div
            className="fixed w-1/2 bg-black bg-opacity-50 flex justify-between items-center px-8 shadow-lg rounded-full left-1/2 transform -translate-x-1/2 mt-8 h-20 transition-transform duration-300 hover:-translate-y-2"
            style={{ top: '20px' }}
          >
            <a href="#website" className="text-slate-50 text-xl font-bold">PLANT</a>
            <div className="flex gap-8">
              <a href="#about" className="text-slate-50 text-lg">About</a>
              <a href="#services" className="text-slate-50 text-lg">Services</a>
              <a href="#contact" className="text-slate-50 text-lg">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
