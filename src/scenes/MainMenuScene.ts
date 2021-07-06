import CONSTANTS from '../utils/constants';

export default class extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.MAIN_MENU,
    });
  }
}
