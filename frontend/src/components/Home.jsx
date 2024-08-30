import React from 'react';
import heroImage from '../assets/plantback.jpg'; // Adjust the path as needed

function HomePage() {
  return (
    <div id="home" className="h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-1/2"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-8">Your journey starts here.</p>
          <a
            href="#about"
            className="bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
