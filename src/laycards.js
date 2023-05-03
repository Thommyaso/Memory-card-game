import Card from './card';

export default class CardLayout {
  constructor(ctx, cardSize, boardWidth, imgArr) {
    this.ctx = ctx;
    this.cardPosX = 0;
    this.cardPosY = 0;
    this.cardSize = cardSize;
    this.boardWidth = boardWidth;
    this.nrOfRowsCols = boardWidth / cardSize;
    this.imgArr = imgArr;
  }

  layCards() {
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
  }

  replaceCard(x, src) {
    this.imgArr[x].img.src = src;
  }
}
