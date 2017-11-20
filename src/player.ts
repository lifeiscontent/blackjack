import { EventEmitter } from 'events';
import Hand from './hand';

export default class Player extends EventEmitter {
  protected hand: Hand;
  constructor() {
    super();
    this.hand = new Hand();
    this.addEventListeners();
  }
  addEventListeners() {
    this.on('add-card-to-hand', card => {
      this.hand.cards.push(card);
    });
  }
}
