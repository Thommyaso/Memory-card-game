import Card from './card';
import Event from './event';

export default class CardLayout {
  constructor(ctx, cardSize, boardWidth, canvas) {
    this.ctx = ctx;

    this.cardPosX = 0;
    this.cardPosY = 0;

    this.cardSize = cardSize;
    this.boardWidth = boardWidth;
    this.nrOfRowsCols = boardWidth / cardSize;

    // array used for laying out cards(circle outline), it creates an area for
    // Event locates each card by using x and y values
    this.imgArr = [];

    // lays card blanks within tha canvas
    (() => {
      for (let rowNr = 0; rowNr < this.nrOfRowsCols; rowNr += 1) {
        for (let colNr = 0; colNr < this.nrOfRowsCols; colNr += 1) {
          this.imgArr.push(new Card('../assets/images/backofcard.svg', this.cardSize, this.cardPosX, this.cardPosY));
          this.cardPosX += this.cardSize;
        }
        this.cardPosX = 0;
        this.cardPosY += this.cardSize;
      }
      this.imgArr.forEach((element) => {
        element.draw(this.ctx);
      });
    })();

    this.event = new Event(canvas, this);
  }

  // deletes the original image
  deleteCard(x, y) {
    this.ctx.clearRect(x, y, this.cardSize, this.cardSize);
  }

  // draws new image on selected card
  replaceCard(index, src) {
    this.imgArr[index].img.src = src;
  }
}
