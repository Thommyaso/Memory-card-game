export default class Logic {
  // Creates a private variable of randomly assigned indexes of images
  #randomArr = []; // czy w tym przypadku dobrym pomyslem jest ztworzenie private variable?

  constructor(cardLayout) {
    this.cardLayout = cardLayout;
    this.imgArr = cardLayout.imgArr;
    this.picArr = cardLayout.picArr;
    /* const _randomArr = []; */

    this.clickedCard = [];
    this.indexOfClicked = [];
    this.stashedCodedIndex = [];
    this.matchedCards = [];
    this.canGo = true;

    (() => {
      const unusedPicIndex = [];
      // makes an array from 0 to picArr.length
      for (let t = 0; t < this.picArr.length; t += 1) {
        unusedPicIndex.push(t);
      }
      // selects random index of unusedPicIndex array and pushes it to randomArr creating a randomly
      // shuffled array
      for (let q = 0; q < this.picArr.length; q += 1) {
        const getNr = Math.floor(Math.random() * unusedPicIndex.length);
        this.#randomArr.push(unusedPicIndex[getNr]);
        unusedPicIndex.splice(getNr, 1);
      }
    })();
  }

  decide(index) {
    if (this.canGo) {
      const codedIndex = this.#randomArr[index];

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
