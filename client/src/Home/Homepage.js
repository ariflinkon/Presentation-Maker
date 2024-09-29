import React, { useState, useEffect } from 'react';
import { FaFilePowerpoint, FaFont, FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaShapes, FaImage, FaAlignCenter, FaSave } from 'react-icons/fa';
import { AiOutlineBgColors } from 'react-icons/ai';
import { Helmet } from 'react-helmet';
import { useRecoilValue } from 'recoil';
import { addNewSlide, addTextBox, applyFont, changeFontSize, toggleBold, toggleItalic, toggleUnderline, addBullets, addNumbering, addShape, insertPicture, alignContent, changeBackground, savePresentation } from '../components/toolbarActions';
import { layoutState, layoutSizes } from '../hooks/usePresentation';
import LayoutButton from '../components/LayoutButton';

const Homepage = () => {
  const [fonts, setFonts] = useState([]);
  const [slides, setSlides] = useState([]);
  const currentLayout = useRecoilValue(layoutState);
  const { width, height } = layoutSizes[currentLayout];

  useEffect(() => {
    // Fetch fonts from a font library API
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCHTzzmeR6CURG0lic_oQT9iTB5sNXpDFY')
      .then(response => response.json())
      .then(data => {
        const fontList = data.items.map(item => item.family);
        setFonts(fontList);
      })
      .catch(error => console.error('Error fetching fonts:', error));
  }, []);

  const handleAddNewSlide = () => {
    const newSlide = { id: slides.length + 1, title: `Slide ${slides.length + 1}` };
    setSlides([...slides, newSlide]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      {/* Header */}
      <header className="bg-blue-600 text-white p-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CPS</h1>
        <button
          id="save-button"
          className="bg-blue-800 px-4 py-2 rounded-lg flex items-center space-x-2"
          onClick={savePresentation}
        >
          <FaSave className="text-white" />
          <span>Save</span>
        </button>
      </header>

      {/* Toolbar */}
      <div className="flex flex-wrap bg-gray-100 p-3 border-b border-gray-300 justify-evenly">
        <ToolButton id="new-slide-button" icon={<FaFilePowerpoint />} label="New Slide" onClick={handleAddNewSlide} />
        <LayoutButton />
        <ToolButton id="text-box-button" icon={<FaFont />} label="Text Box" onClick={addTextBox} />

        {/* Font Settings */}
        <div className="flex space-x-2 items-center">
          <label className="font-bold">Font:</label>
          <select
            id="font-select"
            className="border rounded p-2"
            onChange={(e) => applyFont(e.target.value)}
          >
            {fonts.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2 items-center">
          <input
            id="font-size-input"
            type="number"
            className="border w-16 text-center rounded p-2"
            defaultValue="16"
            onChange={(e) => changeFontSize(e.target.value)}
          />
          <FaBold id="bold-button" className="text-xl cursor-pointer" onClick={toggleBold} />
          <FaItalic id="italic-button" className="text-xl cursor-pointer" onClick={toggleItalic} />
          <FaUnderline id="underline-button" className="text-xl cursor-pointer" onClick={toggleUnderline} />
        </div>

        <ToolButton id="bullets-button" icon={<FaListUl />} label="Bullets" onClick={addBullets} />
        <ToolButton id="numbering-button" icon={<FaListOl />} label="Numbering" onClick={addNumbering} />
        <ToolButton id="shapes-button" icon={<FaShapes />} label="Shapes" onClick={addShape} />
        <ToolButton id="insert-picture-button" icon={<FaImage />} label="Insert Picture" onClick={insertPicture} />
        <ToolButton id="align-button" icon={<FaAlignCenter />} label="Align" onClick={alignContent} />
        <ToolButton id="background-button" icon={<AiOutlineBgColors />} label="Background" onClick={changeBackground} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Slide List */}
        <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
          {slides.map(slide => (
            <div key={slide.id} className="border p-4 mb-2 bg-white rounded">
              {slide.title}
            </div>
          ))}
        </div>

        {/* Presentation Area */}
        <div id="presentation-area" className="flex-grow flex items-center justify-content-start" style={{ width: '80%' }}>
          <div className="border border-gray-400 bg-white p-10 shadow-lg" style={{ width: `${width}px`, height: `${height}px` }}>
            <h2 className="text-gray-400">Your Slide Goes Here</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolButton = ({ id, icon, label, onClick }) => {
  return (
    <div id={id} className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-500" onClick={onClick}>
      <div className="text-2xl">{icon}</div>
      <span className="text-sm hidden md:block">{label}</span>
    </div>
  );
};

export default Homepage;