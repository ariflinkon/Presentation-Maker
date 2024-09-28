import React from 'react';
import { FaFilePowerpoint, FaFont, FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaShapes, FaImage, FaAlignCenter, FaSave } from 'react-icons/fa';
import { AiOutlineBgColors } from 'react-icons/ai';
import { FiLayout } from 'react-icons/fi';

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CPS</h1>
        <button id="save-button" className="bg-blue-800 px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaSave className="text-white" />
          <span>Save</span>
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap bg-gray-100 p-3 border-b border-gray-300 justify-evenly">
        <ToolButton id="new-slide-button" icon={<FaFilePowerpoint />} label="New Slide" />
        <ToolButton id="layout-button" icon={<FiLayout />} label="Layout" />
        <ToolButton id="text-box-button" icon={<FaFont />} label="Text Box" />

        {/* Font Settings */}
        <div className="flex space-x-2 items-center">
          <label className="font-bold">Font:</label>
          <select id="font-select" className="border rounded p-2">
            <option>Arial</option>
            <option>Helvetica</option>
            <option>Times New Roman</option>
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <input id="font-size-input" type="number" className="border w-16 text-center rounded p-2" defaultValue="16" />
          <FaBold id="bold-button" className="text-xl cursor-pointer" />
          <FaItalic id="italic-button" className="text-xl cursor-pointer" />
          <FaUnderline id="underline-button" className="text-xl cursor-pointer" />
        </div>

        <ToolButton id="bullets-button" icon={<FaListUl />} label="Bullets" />
        <ToolButton id="numbering-button" icon={<FaListOl />} label="Numbering" />
        <ToolButton id="shapes-button" icon={<FaShapes />} label="Shapes" />
        <ToolButton id="insert-picture-button" icon={<FaImage />} label="Insert Picture" />
        <ToolButton id="align-button" icon={<FaAlignCenter />} label="Align" />
        <ToolButton id="background-button" icon={<AiOutlineBgColors />} label="Background" />
      </div>

      {/* Main Presentation Area */}
      <div id="presentation-area" className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="border border-gray-400 bg-white p-10 shadow-lg" style={{ width: '90%', maxWidth: '960px', height: '540px' }}>
          <h2 className="text-gray-400">Your Slide Goes Here</h2>
        </div>
      </div>
    </div>
  );
};

// ToolButton Component
const ToolButton = ({ id, icon, label }) => {
  return (
    <div id={id} className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-500">
      <div className="text-2xl">{icon}</div>
      <span className="text-sm hidden md:block">{label}</span>
    </div>
  );
};

export default Homepage;