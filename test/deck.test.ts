import Deck from '../src/deck';
import Card from '../src/card';

describe('Deck', () => {
  let subject: Deck;

  beforeEach(() => {
    subject = new Deck();
  });

  it('is defined', () => {
    expect(subject).toBeInstanceOf(Deck);
  });

  it('defines TOTAL_CARDS', () => {
    expect(Deck.TOTAL_CARDS).toBe(52);
  });

  it('defines CARDS_PER_SUIT', () => {
    expect(Deck.CARDS_PER_SUIT).toBe(13);
  });

  it('has TOTAL_CARDS', () => {
    expect(subject.cards).toHaveLength(Deck.TOTAL_CARDS);
  });

  it('has CARDS_PER_SUIT', () => {
    [
      Card.Suit.Hearts,
      Card.Suit.Diamonds,
      Card.Suit.Clubs,
      Card.Suit.Spades
    ].forEach(suit =>
      expect(subject.cards.filter(card => card.suit === suit)).toHaveLength(
        Deck.CARDS_PER_SUIT
      )
    );
  });
});
