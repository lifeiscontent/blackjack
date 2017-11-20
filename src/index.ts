import Dealer from './dealer';
import Player from './player';

export default class Game {
  private dealer: Dealer;
  private players: Player[];

  constructor({ players }: { players: Player[] }) {
    this.dealer = new Dealer();
    this.players = players;
  }

  public start() {
    this.dealer.dealCardsTo(this.players);
  }
}
