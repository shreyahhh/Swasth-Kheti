import React from 'react';
import backgroundImage from '../assets/plantback.jpg'; // Adjust the path as needed

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background image section */}
      </div>
      <div className="flex-1 p-4 bg-white h-screen">
        <h1 className="text-2xl font-bold">Welcome to My Page</h1>
        <p className="mt-2">Here is some content below the background image.</p>
      </div>
    </div>
  );
}

export default App;
