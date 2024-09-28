import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import GoogleFontLoader from 'react-google-font-loader';
import HomePage from '../Home/Homepage';

const PresentationList = () => {
  const [Presentations] = useState([
    { id: 1, title: 'Project Kickoff' },
    { id: 2, title: 'Design Review' },
    { id: 3, title: 'Final Presentation' },
    // Add more slides as needed
  ]);

  const [goToHome, setGoToHome] = useState(false);

  if (goToHome) {
    return <HomePage />;
  }

  const handleAddNewSlide = () => {
    setGoToHome(true);
  };

  return (
    <div className="p-6" style={{ margin: 0, padding: 0, height: '100vh', backgroundColor: '#f0f0f0' }}>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Open Sans',
            weights: [400, 700],
          },
          {
            font: 'Lato',
            weights: [400, 700],
          },
        ]}
      />
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Open Sans, sans-serif', color: '#ffffff' }}>CPS</h1>
        <button id="save-button" className="bg-blue-800 px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-900 transition duration-300">
          <FaSave className="text-white" />
          <span>Save</span>
        </button>
      </header>
      <h1 className="text-2xl font-bold mb-6 mt-4 text-center" style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>Presentation List</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Presentations.map(presentation => (
          <div key={presentation.id} className="border p-6 rounded-lg transition duration-300" style={{ width: '100%', height: '200px', backgroundColor: '#ffffff' }}>
            <h2 className="text-xl font-semibold text-center" style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>{presentation.title}</h2>
          </div>
        ))}
        <button
          className="border p-6 rounded-lg flex items-center justify-center text-blue-500 hover:bg-blue-100 transition duration-300"
          style={{ width: '100%', height: '200px', backgroundColor: '#ffffff' }}
          onClick={handleAddNewSlide}
        >
          + Create New Presentation
        </button>
      </div>
    </div>
  );
};

export default PresentationList;