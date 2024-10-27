import './RightPanel.css';
import { useRef, useEffect } from 'react';
import { drawFractalTriangle, drawFractalSquare } from '../../utils';

const color = '#8400ff';

function RightPanel({ type }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const start = 0;
    const end = 0;
    const len = 500;

    switch (type) {
      case 'triangle':
        drawFractalTriangle(ctx, start, end, len, color);
        break;
      case 'square':
        drawFractalSquare(ctx, start, end, len, color);
        break;
      default:
        break;
    }
  }, [type]); 

  return (
    <div className='right-panel'>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
}

export default RightPanel;
