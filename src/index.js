const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_BORDER_WIDTH = 400;

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);
