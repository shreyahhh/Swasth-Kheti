import React from 'react';
import { Link } from 'react-router-dom';
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
             <Link to="/" className="text-slate-50 text-xl font-bold">PLANT</Link>
            <div className="flex gap-8">
            <Link to="/" className="text-slate-50 text-lg">Home</Link>
            <Link to="/about" className="text-slate-50 text-lg">About</Link>
                <Link to="/chatbot" className="text-slate-50 text-lg">ChatBot</Link>
                {/* <Link to="/article" className="text-slate-50 text-lg">Article</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
