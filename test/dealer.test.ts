import Dealer from '../src/dealer';
import Deck from '../src/deck';

describe('Dealer', () => {
  let subject: Dealer;

  beforeEach(() => {
    subject = new Dealer();
  });

  it('is defined', () => {
    expect(subject).toBeInstanceOf(Dealer);
  });

  it('has a deck', () => {
    expect(subject.deck).toBeInstanceOf(Deck);
  });

  it('has visibleCards', () => {
    expect(subject.visibleCards()).toEqual([]);
    subject.dealCardsTo([]);
    let card = subject.hand.cards[subject.hand.cards.length - 1];
    expect(subject.visibleCards()).toEqual([card]);
  });
});
