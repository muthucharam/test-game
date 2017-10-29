import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GamesService } from './../games.service';
import { GAMEDATA, GAMEJSON ,POSTURL,} from './../../app.config';
import { StoryService } from './story.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import{IntroComponent}from './intro/intro.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public game: Phaser.Game;
  private _dashboardLink: String;


  constructor(private storyService: StoryService, @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    GAMEJSON.DATA.data = [];
    this.storyService.onPreloadImages().subscribe(element => {
      GAMEJSON.DATA.data.push(element);


      this.game = new Phaser.Game(element.GAMEWINDOW.WIDTH, element.GAMEWINDOW.HEIGHT, Phaser.AUTO, 'container');
      this.game.state.add('IntroGame', IntroComponent, false);
      
      this.game.state.start('IntroGame');
      
      
    });
}
}
