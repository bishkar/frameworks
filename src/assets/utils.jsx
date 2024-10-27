export const drawTriangle = (ctx, start, end, len, color) => {
    ctx.beginPath();
    ctx.moveTo(start, end);
    ctx.lineTo(start + len, end);
    ctx.lineTo(start + len / 2, end + len);
    ctx.lineTo(start, end);
    ctx.strokeStyle = color;
    ctx.stroke();
};

export const drawSquare = (ctx, start, end, len, color) => {
    ctx.beginPath();
    ctx.rect(start, end, len, len);
    ctx.strokeStyle = color;
    ctx.stroke();
};

export const draw = (ctx, type, start, end, len, color) => {
    switch (type) {
      case 'triangle':
        drawTriangle(ctx, start, end, len, color);
        break;
      case 'square':
        drawSquare(ctx, start, end, len, color);
        break;
      default:
        break;
    }
};

export  const drawFractalTriangle = (ctx, start, end, len, color) => {
    if (len < 1) {
      return;
    }

    draw(ctx, 'triangle', start, end, len, color);

    drawFractalTriangle(ctx, start, end, len / 2);
    drawFractalTriangle(ctx, start + len / 2, end, len / 2);
    drawFractalTriangle(ctx, start + len / 4, end + len / 2, len / 2);
};

export const drawFractalSquare = (ctx, start, end, len, color) => {
    if (len < 1) {
      return;
    }

    draw(ctx, 'square', start, end, len, color);

    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
          if(i != 1 || j != 1) 
              drawFractalSquare(ctx, start + i * len / 3, end + j * len / 3, len / 3);
};
