export default class Card {
  constructor(src, x, y) {
    this.img = new Image();
    this.img.src = src;
    this.size = 80;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, 80, 80);
    };
  }
}
