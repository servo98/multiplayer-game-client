import { CONSTANTS } from '#utils';
import { LEFT } from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({
      key: CONSTANTS.SCENES.MAIN_MENU,
    });
  }
  preload(): void {
    // this.load.image('logo', 'assets/phaser3-logo.png');
    // this.load.image('libs', 'assets/libs.png');
    // this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
    // this.load.glsl('stars', 'assets/starfields.glsl.js');
    
  }
  
  create():void  {
    const createText = this.add.text(30, 30, 'CREATE', {
      align: 'left'
    })
      .setInteractive();
    const joinText = this.add.text(30, 60, 'JOIN', {
      align: 'right'
    });
    createText.on(Phaser.Input.Events.POINTER_DOWN, (datos) => {
      console.log(datos, 'AAAAAAAAAA');
    }, this);
  
    // createText.addListener(Phaser.Input.Events.POINTER_DOWN, () => {
    //   console.log('dale');
    // });
    // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

    // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

    // this.add.image(400, 300, 'libs');

    // const logo = this.add.image(400, 70, 'logo');
    // this.tweens.add({
    //   targets: logo,
    //   y: 350,
    //   duration: 1500,
    //   ease: 'Sine.inOut',
    //   yoyo: true,
    //   repeat: -1,
    // });
  }
}
