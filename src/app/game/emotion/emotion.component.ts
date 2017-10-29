import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GamesService } from './../games.service';
import { GAMEDATA, GAMEJSON ,POSTURL,} from './../../app.config';
import { EmotionService } from './emotion.service';
import { DOCUMENT } from '@angular/platform-browser';
import{IntroComponent}from './intro/intro.component';
import{PictureComponent}from './picture/picture.component';
import{StateOneStaticComponent}from './state-one-static/state-one-static.component';
import{StateOneComponent}from './state-one/state-one.component';
import{StateTwoComponent}from './state-two/state-two.component';
import{StateThreeComponent}from './state-three/state-three.component';
import{StateFinalComponent}from './state-final/state-final.component';

import{IntroStartComponent}from './intro-start/intro-start.component';

import { Inject } from '@angular/core';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.css']
})
export class EmotionComponent implements OnInit {

  
  public game: Phaser.Game;
  private _dashboardLink: String;


  constructor(private emotionService: EmotionService, @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    GAMEJSON.DATA.data = [];
    this.emotionService.onPreloadImages().subscribe(element => {
      GAMEJSON.DATA.data.push(element);


      this.game = new Phaser.Game(element.GAMEWINDOW.WIDTH, element.GAMEWINDOW.HEIGHT, Phaser.AUTO, 'container');
      this.game.state.add('IntroGame', IntroComponent, false);
      this.game.state.add('PictureGame', PictureComponent, false);
      this.game.state.add('StateOneStaticGame', StateOneStaticComponent, false);
      this.game.state.add('StateOneGame', StateOneComponent, false);
      this.game.state.add('StateTwoGame', StateTwoComponent, false);
      this.game.state.add('StateThreeGame', StateThreeComponent, false);
      this.game.state.add('StateFinalGame', StateFinalComponent, false);
      
      this.game.state.add('IntroStartGame', IntroStartComponent, false);
      
      this.game.state.start('StateFinalGame');
      
      
    });
}
}
