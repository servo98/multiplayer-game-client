import { CONSTANTS } from '#utils';
export default class extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.IN_GAME_MENU,
    });
  }
}
