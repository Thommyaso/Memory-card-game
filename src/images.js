export default class TossPictures {
  constructor() {
    this.picsArr = [
      '../assets/images/cardpics/access.svg',
      '../assets/images/cardpics/bacteria.svg',
      '../assets/images/cardpics/bomb.svg',
      '../assets/images/cardpics/dino.svg',
      '../assets/images/cardpics/flask.svg',
      '../assets/images/cardpics/one-up.svg',
      '../assets/images/cardpics/pac-man.svg',
      '../assets/images/cardpics/skull.svg',
      // test doubling pictures
      '../assets/images/cardpics/access.svg',
      '../assets/images/cardpics/bacteria.svg',
      '../assets/images/cardpics/bomb.svg',
      '../assets/images/cardpics/dino.svg',
      '../assets/images/cardpics/flask.svg',
      '../assets/images/cardpics/one-up.svg',
      '../assets/images/cardpics/pac-man.svg',
      '../assets/images/cardpics/skull.svg',
    ];
    this.randomArr = [];
    this.picArrLength = this.picsArr.length;
    this.biggestNr = this.picArrLength;
    this.unusedPicIndex = [];
  }

  tossPics() {
    // makes an array from 0 to picArr.length
    for (let t = 0; t < this.picArrLength; t += 1) {
      this.unusedPicIndex.push(t);
    }

    // takes a number from random index of an unusedPicIindex array and pushes it to randomArr
    // after that it cuts that number out of unusedPicIindex array
    // so that it's not accidentaly reused
    for (let q = 0; q < this.picArrLength; q += 1) {
      const getNr = TossPictures.getNr(this.unusedPicIndex.length);
      this.randomArr.push(this.unusedPicIndex[getNr]);
      this.unusedPicIndex.splice(getNr, 1);
    }
  }

  static getNr(biggestNr) { // Dlaczego muszę tutaj użyć static?
    return Math.floor(Math.random() * biggestNr);
  }
}
