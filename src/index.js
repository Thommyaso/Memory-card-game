import CardLayout from './laycards';
import TossPictures from './images';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const CANVAS_BORDER_WIDTH = 400;
const CARD_SIZE = 100;

canvas.width = CANVAS_BORDER_WIDTH;
canvas.height = CANVAS_BORDER_WIDTH;

// temp arrays
let clickedcard = [];
let clickedimg = [];

// Draw canvas borders
ctx.beginPath();
ctx.strokeRect(0, 0, CANVAS_BORDER_WIDTH, CANVAS_BORDER_WIDTH);

// Lay all the cards
export const cardsLayed = new CardLayout(ctx, CARD_SIZE, CANVAS_BORDER_WIDTH);
cardsLayed.layCards();

// Randomly assign pictures to each card
export const shufflePics = new TossPictures();
shufflePics.tossPics();

// eventlistener that is able to locate wchich card is being clicked on
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  cardsLayed.imgArr.forEach((element, index) => {
    if (mouseX >= element.x && mouseX <= element.x + element.cardSize
        && mouseY >= element.y && mouseY <= element.y + element.cardSize) {
      console.log(`clicked: ${index}`);
      console.log(shufflePics);
      console.log(`randomArr: ${shufflePics.randomArr}`);
      // eslint-disable-next-line max-len
      cardsLayed.deleteCard(element.x, element.y); // dlaczego ta funkcja dziala tutaj ale nie poza eventlitener?
      cardsLayed.replaceCard(index, shufflePics.picsArr[shufflePics.randomArr[index]]);
      clickedcard.push(index);
      clickedimg.push(shufflePics.picsArr[shufflePics.randomArr[index]]);
      if (clickedimg.length >= 2) {
        if (clickedimg[0] === clickedimg[1]) {
          alert('congrats');
          clickedcard = [];
          clickedimg = [];
        } else {
          clickedcard.forEach((el) => {
            cardsLayed.deleteCard(cardsLayed.imgArr[el].x, cardsLayed.imgArr[el].y);
            cardsLayed.replaceCard(el, '../assets/images/backofcard.svg');

            clickedcard = [];
            clickedimg = [];
          });
        }
      }
    }
  });
});

cardsLayed.deleteCard(100, 100); // dlaczego to nie dziala?
