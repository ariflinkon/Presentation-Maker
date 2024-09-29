import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { layoutState, layoutSizes } from '../hooks/usePresentation';
import { FiLayout } from 'react-icons/fi';
import Select from 'react-select';

const layouts = [
  { value: '4:3', label: '4:3' },
  { value: '16:9', label: '16:9' },
  { value: '16:10', label: '16:10' }
];

const LayoutButton = () => {
  const [currentLayout, setCurrentLayout] = useRecoilState(layoutState);

  const handleChangeLayout = (selectedLayout) => {
    setCurrentLayout(selectedLayout.value);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
      <FiLayout className="text-gray-600" />
      <span>Layout</span>
      <Select
        className="basic-single"
        classNamePrefix="select"
        options={layouts}
        onChange={handleChangeLayout}
        value={layouts.find((layout) => layout.value === currentLayout)}
      />
    </div>
  );
};

export default LayoutButton;