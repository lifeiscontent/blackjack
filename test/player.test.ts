import Player from '../src/player';

describe('Player', () => {
  it('is defined', () => {
    expect(new Player()).toBeInstanceOf(Player);
  });
});
