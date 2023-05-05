import Card from './card';

export default class CardLayout {
  constructor(ctx, cardSize, boardWidth, picArr) {
    this.ctx = ctx;

    this.cardPosX = 0;
    this.cardPosY = 0;

    this.cardSize = cardSize;
    this.boardWidth = boardWidth;
    this.nrOfRowsCols = boardWidth / cardSize;

    // array used for laying out cards(circle outline), it creates an area to
    // then be cilicked on and calculate index
    this.imgArr = [];
    // array of images available
    this.picArr = picArr;
    // array of numbers displaced randomly to be used for shuffeling pictures out randomly
    // on the initial array(imgArr)
    this.randomArr = [];
  }

  // lays cards blanks within tha canvas
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

  shufflePics() {
    const unusedPicIndex = [];
    // makes an array from 0 to picArr.length
    for (let t = 0; t < this.picArr.length; t += 1) {
      unusedPicIndex.push(t);
    }

    for (let q = 0; q < this.picArr.length; q += 1) {
      const getNr = CardLayout.getNr(unusedPicIndex.length);
      this.randomArr.push(unusedPicIndex[getNr]);
      unusedPicIndex.splice(getNr, 1);
    }
  }

  // deletes the original image
  deleteCard(x, y) {
    this.ctx.clearRect(x, y, this.cardSize, this.cardSize);
  }

  // draws new image on selected card
  replaceCard(index, src) {
    this.imgArr[index].img.src = src;
  }

  static getNr(biggestNr) { // Dlaczego muszę tutaj użyć static?
    return Math.floor(Math.random() * biggestNr);
  }
}
