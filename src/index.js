import Card from './card';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_BORDER_WIDTH = 400;

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);

// Test to prove card working:
const imgArr = [];

let x = 0;
let y = 0;
for (let b = 0; b < 5; b += 1) {
  for (let i = 0; i < 5; i += 1) {
    imgArr.push(new Card('../assets/images/backofcard.svg', x, y));
    x += 80;
  }
  x = 0;
  y += 80;
}
imgArr.forEach((element) => {
  element.draw(ctx);
});

console.log(imgArr);
