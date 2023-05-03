/* import Card from './card'; */
import CardLayout from './laycards';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

/* ctx.clearRect(0, 0, canvas.width, canvas.height); */

const CANVAS_BORDER_WIDTH = 300;
const CARD_SIZE = 100;

const imgArr = [];

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);

// Lay all the cards
const cardsLayed = new CardLayout(ctx, CARD_SIZE, CANVAS_BORDER_WIDTH, imgArr);
cardsLayed.layCards();

// test replaceCard()
cardsLayed.replaceCard(1, '../assets/images/account.svg');
