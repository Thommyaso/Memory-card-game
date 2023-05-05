export default class Logic {
  constructor(cardLayout /* index */) {
    this.cardLayout = cardLayout;
    this.imgArr = cardLayout.imgArr;
    this.picArr = cardLayout.picArr;
    this.randomArr = cardLayout.randomArr;
    this.clickedCard = [];
    this.indexOfClicked = [];
  }

  decide(index) {
    const codedIndex = this.randomArr[index];

    // eslint-disable-next-line max-len
    this.cardLayout.deleteCard(this.imgArr[index].x, this.imgArr[index].y); // dlaczego ta funkcja dziala tutaj ale nie poza eventlitener?
    this.cardLayout.replaceCard(index, this.picArr[codedIndex]);

    this.clickedCard.push(this.picArr[codedIndex]);
    this.indexOfClicked.push(index);

    if (this.clickedCard.length >= 2) {
      if (this.clickedCard[0] === this.clickedCard[1]) {
        this.clickedCard = [];
        this.indexOfClicked = [];
      } else {
        this.indexOfClicked.forEach((el) => {
          this.cardLayout.deleteCard(this.imgArr[el].x, this.imgArr[el].y);
          this.cardLayout.replaceCard(el, '../assets/images/backofcard.svg');

          this.indexOfClicked = [];
          this.clickedCard = [];
        });
      }
    }
  }
}
