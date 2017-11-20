import Card from './card';

export class Deck {
  public cards: Card[];
  constructor() {
    this.cards = Array(Deck.TOTAL_CARDS)
      .fill(undefined)
      .map((_, index) => {
        const suit = Math.floor(index / Deck.CARDS_PER_SUIT) as Card.Suit;
        const rank = index % Deck.CARDS_PER_SUIT;
        return new Card(suit, rank);
      });
  }
  shuffle() {}
  takeCards(totalCardsToTake: number) {
    return this.cards.splice(0, totalCardsToTake);
  }
}

export namespace Deck {
  export const TOTAL_CARDS = 52;
  export const CARDS_PER_SUIT = 13;
}

export default Deck;
