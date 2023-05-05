export default class Logic {
  constructor(cardLayout) {
    this.cardLayout = cardLayout;
    this.imgArr = cardLayout.imgArr;
    this.picArr = cardLayout.picArr;
    this.randomArr = cardLayout.randomArr;
    this.clickedCard = [];
    this.indexOfClicked = [];
    this.stashedCodedIndex = [];
    this.matchedCards = [];
    this.canGo = true;
  }

  decide(index) {
    if (this.canGo) {
      const codedIndex = this.randomArr[index];

      // makes sure that cards that are currently shown or have been matched can't be clicked on
      if (this.matchedCards.indexOf(codedIndex) === -1
      && this.stashedCodedIndex.indexOf(codedIndex) === -1) {
        this.stashedCodedIndex.push(codedIndex);

        // uncovers selected card
        // eslint-disable-next-line max-len
        this.cardLayout.deleteCard(this.imgArr[index].x, this.imgArr[index].y); // dlaczego ta funkcja dziala tutaj ale nie poza eventlitener?
        this.cardLayout.replaceCard(index, this.picArr[codedIndex]);

        // stores img of a clicked card in array for comparing
        this.clickedCard.push(this.picArr[codedIndex]);
        // stores indexes of selected cards
        this.indexOfClicked.push(index);

        // awaits for 2 cards to be uncovered to check if they match
        if (this.clickedCard.length >= 2) {
          this.canGo = false;
          // displays pictures for selected duration of time before making decision
          setTimeout(
            () => {
              if (this.clickedCard[0] === this.clickedCard[1]) {
              // if they match each card is remembered so that it can't be clicked again
                this.stashedCodedIndex.forEach((element) => {
                  this.matchedCards.push(element);
                });
                this.clickedCard = [];
                this.indexOfClicked = [];
              } else {
              // if not a match covers cards back
                this.indexOfClicked.forEach((el) => {
                  this.cardLayout.deleteCard(this.imgArr[el].x, this.imgArr[el].y);
                  this.cardLayout.replaceCard(el, '../assets/images/backofcard.svg');

                  this.indexOfClicked = [];
                  this.clickedCard = [];
                });
              }
              this.stashedCodedIndex = [];
              this.canGo = true;
            },
            400,
          );
        }
      }
    }
  }
}
