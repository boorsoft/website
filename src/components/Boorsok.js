import * as PIXI from "pixi.js";

import boorsokImage from "../assets/boorsok.png";
import { lerp } from "../utils/utils";

class Boorsok {
  constructor(app) {
    this.speed = 1 + Math.random() * 10;

    this.app = app;
    this.boorsok = PIXI.Sprite.from(boorsokImage);
    this.boorsok.anchor.set(0.5);
    this.boorsok.width = 70;
    this.boorsok.height = 95;
    this.boorsok.x = Math.random() * app.screen.width;
    this.boorsok.y = Math.random() * app.screen.height;
    this.boorsok.rotation = Math.random() * Math.PI;
    this.boorsok.speed = this.speed;
    this.boorsok.alpha = 0.3 + Math.random(0.6);
    this.boorsok.interactive = true;

    this.clicked = false;
    this.hovered = false;

    this.boorsok.on("pointerdown", () => (this.clicked = true));
    this.boorsok.on("pointerover", () => (this.hovered = true));
    this.boorsok.on("pointerout", () => (this.hovered = false));

    app.stage.addChild(this.boorsok);
  }

  animate = () => {
    this.boorsok.y -= this.boorsok.speed;
    this.boorsok.x += Math.sin(Date.now() * 0.001) / 20;
    this.boorsok.rotation += 0.01;

    if (this.clicked) this.boorsok.alpha = lerp(this.boorsok.alpha, 0, 0.1);

    if (this.hovered) {
      this.boorsok.speed = lerp(this.boorsok.speed, 0, 0.05);
      this.boorsok.tint = 0xffbb00
    } else {
      this.boorsok.tint = 0xffffff
      this.boorsok.speed = lerp(this.boorsok.speed, this.speed, 0.05);
    }

    if (this.boorsok.y < -50) {
      this.clicked = false
      this.boorsok.alpha = 1
      this.boorsok.y = this.app.screen.height + 50;
      this.boorsok.x = Math.random() * this.app.screen.width;
    }
  };
}

export default Boorsok;
