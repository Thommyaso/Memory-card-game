export default class View {
  constructor(borderLength, rowCol) {
    this.borderLength = borderLength;
    this.rowCol = rowCol;
    this.squareSize = borderLength / rowCol;

    // create a canvas when class is used
    this.createCanvas();
  }

  createCanvas() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    const canvasWidth = this.borderLength;
    const canvasHeight = this.borderLength;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw grid
    ctx.beginPath();
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
  }
}
