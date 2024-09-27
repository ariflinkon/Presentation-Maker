import React from 'react';
import DrawingCanvas from './DrawingCanvas';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const SlideArea = () => {
  return (
    <div className="slide-area">
      <TransformWrapper>
        <TransformComponent>
          <DrawingCanvas />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default SlideArea;
