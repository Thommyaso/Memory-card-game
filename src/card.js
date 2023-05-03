export default class Card {
  constructor(src, cardSize, x, y) {
    this.img = new Image();
    this.img.src = src;
    this.cardSize = cardSize;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.img.onload = () => {
      ctx.beginPath();
      ctx.drawImage(this.img, this.x, this.y, this.cardSize, this.cardSize);
      ctx.closePath();
    };
  }

  deleteCard(ctx) {
    ctx.clearRect(this.x, this.y, this.cardSize, this.cardSize);
  }
}
