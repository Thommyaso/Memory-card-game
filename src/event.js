import Logic from './logic';

export default class Event {
  constructor(canvas, cardLayout) {
    this.logic = new Logic(cardLayout);

    canvas.addEventListener('click', (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      cardLayout.imgArr.forEach((element, index) => {
        if (mouseX >= element.x && mouseX <= element.x + element.cardSize
                  && mouseY >= element.y && mouseY <= element.y + element.cardSize) {
          /* console.log(`clicked: ${index}`); */
          this.logic.decide(index);
        }
      });
    });
  }
}
