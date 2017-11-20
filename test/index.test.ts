import Game from '../src/index';
import Player from '../src/player';
import Dealer from '../src/dealer';

describe('Game', () => {
  let players: Player[];
  let subject: Game;

  beforeEach(() => {
    players = [new Player(), new Player()];
    subject = new Game({ players });
  });

  it('is defined', () => {
    expect(subject).toBeInstanceOf(Game);
  });

  it('has a dealer', () => {
    expect(subject.dealer).toBeInstanceOf(Dealer);
  });

  it('has players', () => {
    expect(subject.players).toBe(players);
  });

  it('can start', () => {
    const playersAndDealer = subject.players.concat(subject.dealer);
    playersAndDealer.forEach(player => {
      expect(player.hand.cards).toHaveLength(0);
    });

    subject.start();

    playersAndDealer.forEach(player => {
      expect(player.hand.cards).toHaveLength(2);
    });
  });
});
