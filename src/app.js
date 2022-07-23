import * as PIXI from 'pixi.js'
import Boorsok from './components/Boorsok';

import Logo from './components/Logo';

const boorsoks = []
const boorsoksCount = 10

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
  backgroundColor: 0xFFFFFF,
});

document.body.appendChild(app.view);

for (let i = 0; i < boorsoksCount; i++) {
  boorsoks.push(new Boorsok(app))
}

const logo = new Logo(app)

// const text = new PIXI.Text('', {fontFamily : 'Arial', fontSize: 24, fill : '#333', align : 'center'})
// text.x = app.screen.width / 2 + 50
// text.y = app.screen.height / 2 + 40

// app.stage.addChild(text)

app.ticker.add((delta) => {
  logo.animate()
  boorsoks.forEach((boorsok) => {
    boorsok.animate()
  })
});
