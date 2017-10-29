import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GamesService } from './../games.service';
import { GAMEDATA, GAMEJSON ,POSTURL,} from './../../app.config';
import { AlphabetService } from './alphabet.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import{IntroComponent}from './intro/intro.component';
import{PictureComponent}from './picture/picture.component';
import{ShootingStaticComponent}from './shooting-static/shooting-static.component';
import{ShootingComponent}from './shooting/shooting.component';
import{ShootingSuccessComponent}from './shooting-success/shooting-success.component';
import{PaintingComponent}from './painting/painting.component';
import{TracingComponent}from './tracing/tracing.component';
import{WordStaticComponent}from './word-static/word-static.component';
import{WordingComponent}from './wording/wording.component';
import{WordFinalComponent}from './word-final/word-final.component';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  
    public game: Phaser.Game;
    private _dashboardLink: String;
  
  
    constructor(private alphabetService: AlphabetService, @Inject(DOCUMENT) private document: any) {
  
  
    }
    ngOnInit() {
      GAMEJSON.DATA.data = [];
      this.alphabetService.onPreloadImages().subscribe(element => {
        GAMEJSON.DATA.data.push(element);
  
  
        this.game = new Phaser.Game(element.GAMEWINDOW.WIDTH, element.GAMEWINDOW.HEIGHT, Phaser.AUTO, 'container');
        this.game.state.add('IntroGame', IntroComponent, false);
        this.game.state.add('PictureGame', PictureComponent, false);
        this.game.state.add('ShootingStaticGame', ShootingStaticComponent, false);
        
        this.game.state.add('ShootingGame', ShootingComponent, false);
        this.game.state.add('ShootingSuccessGame', ShootingSuccessComponent, false);
        this.game.state.add('PaintingGame', PaintingComponent, false);
        this.game.state.add('TracingGame', TracingComponent, false);
        this.game.state.add('WordingGame', WordingComponent, false);
        this.game.state.add('WordStaticGame', WordStaticComponent, false);
        this.game.state.add('WordFinalGame', WordFinalComponent, false);
        
        
        this.game.state.start('IntroGame');
        
  
});
   
}

}
