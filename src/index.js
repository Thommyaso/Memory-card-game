import CardLayout from './laycards';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_BORDER_WIDTH = 300;
const CARD_SIZE = 100;

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);

// Lay all the cards
const cardsLayed = new CardLayout(ctx, CARD_SIZE, CANVAS_BORDER_WIDTH);
cardsLayed.layCards();

// eventlistener that is able to locate wchich card is being clicked on
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  cardsLayed.imgArr.forEach((element, index) => {
    if (mouseX >= element.x && mouseX <= element.x + element.cardSize
        && mouseY >= element.y && mouseY <= element.y + element.cardSize) {
      console.log(`clicked: ${index}`);
      // eslint-disable-next-line max-len
      cardsLayed.deleteCard(element.x, element.y); // dlaczego ta funkcja dziala tutaj ale nie poza eventlitener?
      cardsLayed.replaceCard(index, '../assets/images/account.svg');
    }
  });
});

cardsLayed.deleteCard(100, 100); // dlaczego to nie dziala?
