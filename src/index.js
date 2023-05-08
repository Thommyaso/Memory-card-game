import CardLayout from './laycards';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_BORDER_WIDTH = 400;
const CARD_SIZE = 100;

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);

// Lay all the cards and shuffle pictures
const cardLayout = new CardLayout(ctx, CARD_SIZE, CANVAS_BORDER_WIDTH, canvas);

// eslint-disable-next-line max-len
cardLayout.deleteCard(0, 0); // dlaczego ta funkcja nie jest w stanie tutaj wyczyścić calkowicie okna ale działa w logic.js(linia: 15)?
