import * as PIXI from 'pixi.js'

import logoImage from '../assets/boorsoft-logo-medium.png'

class Logo {
  constructor(app) {
    this.logo = PIXI.Sprite.from(logoImage)
    this.logo.anchor.set(0.5)
    this.logo.x = app.screen.width / 2
    this.logo.y = app.screen.height / 2
    this.logo.width = 700
    this.logo.height = 700

    app.stage.addChild(this.logo)
  }
  
  animate = () => {
    this.logo.y += Math.sin(Date.now() * 0.003) / 5
  }

}

export default Logo;