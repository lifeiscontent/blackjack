import Hand from '../src/hand';

describe('Hand', () => {
  it('is defined', () => {
    expect(new Hand()).toBeInstanceOf(Hand);
  });
});
