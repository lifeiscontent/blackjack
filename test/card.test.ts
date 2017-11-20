import Card from '../src/card';

describe('Card', () => {
  let subject: Card;

  beforeEach(() => {
    subject = new Card(Card.Suit.Hearts, 11);
  });

  it('is defined', () => {
    expect(subject).toBeInstanceOf(Card);
  });

  it('knows its suits', () => {
    expect(Card.Suit).toEqual({
      '0': 'Hearts',
      '1': 'Diamonds',
      '2': 'Clubs',
      '3': 'Spades',
      Clubs: 2,
      Diamonds: 1,
      Hearts: 0,
      Spades: 3
    });
  });

  it('has a suit and rank', () => {
    expect(subject.suit).toEqual(Card.Suit.Hearts);
    expect(subject.rank).toEqual(11);
  });

  it('knows its value', () => {
    expect(subject.value()).toEqual(10);
  });
});
