import React from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useRecoilState } from 'recoil';
import { drawingState } from '../hooks/usePresentation'; // Correct import path

const DrawingCanvas = () => {
  const [lines, setLines] = useRecoilState(drawingState);

  const handleDraw = (e) => {
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const newLine = [...lines, { points: [point.x, point.y] }];
    setLines(newLine);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleDraw}
      onMouseMove={handleDraw}
    >
      <Layer>
        {lines.map((line, i) => (
          <Line key={i} points={line.points} stroke="black" />
        ))}
      </Layer>
    </Stage>
  );
};

export default DrawingCanvas;