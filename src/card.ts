export class Card {
  constructor(public suit: Card.Suit, public rank: number) {}

  value() {
    switch (this.rank) {
      case 0:
        return 1;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return this.rank + 1;
      case 10:
      case 11:
      case 12:
        return 10;
      default:
        return this.rank;
    }
  }
}

export namespace Card {
  export enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades
  }
}

export default Card;
