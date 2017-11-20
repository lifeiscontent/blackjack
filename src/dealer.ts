import Deck from './deck';
import Player from './player';
import { shuffleArray } from './utils';

export default class Dealer extends Player {
  static DEALT_CARD_AMOUNT = 2;
  private deck: Deck;
  constructor() {
    super();
    this.deck = new Deck();
    this.deck.shuffle();
  }
  dealCardsTo(players: Player[]) {
    const playersAndDealer = players.concat(this);
    const dealtCardTotal = playersAndDealer.length * Dealer.DEALT_CARD_AMOUNT;
    const cardsToBeDealt = this.deck.takeCards(dealtCardTotal);
    cardsToBeDealt.forEach((card, index) => {
      const player = playersAndDealer[index % playersAndDealer.length];
      player.emit('add-card-to-hand', card);
    });
  }
  visibleCards() {
    if (this.hand.cards.length > Dealer.DEALT_CARD_AMOUNT) {
      return this.hand.cards;
    } else {
      let card = this.hand.cards[this.hand.cards.length - 1];
      return card ? [card] : [];
    }
  }
}
