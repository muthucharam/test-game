import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GamesService } from './../games.service';
import { GAMEDATA, GAMEJSON ,POSTURL,} from './../../app.config';
import { AlphabetMatchingService } from './alphabet-matching.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Inject } from '@angular/core';
import{IntroComponent}from './intro/intro.component';

import{StateAComponent}from './state-a/state-a.component';
import{StateBComponent}from './state-b/state-b.component';
import{StateCComponent}from './state-c/state-c.component';
import{StateDComponent}from './state-d/state-d.component';
import{StateEComponent}from './state-e/state-e.component';
import{StateFComponent}from './state-f/state-f.component';
import{StateGComponent}from './state-g/state-g.component';
import{StateHComponent}from './state-h/state-h.component';
import{StateIComponent}from './state-i/state-i.component';
import{StateJComponent}from './state-j/state-j.component';
import{StateKComponent}from './state-k/state-k.component';
import{StateLComponent}from './state-l/state-l.component';
import{StateMComponent}from './state-m/state-m.component';
import{StateNComponent}from './state-n/state-n.component';
import{StateOComponent}from './state-o/state-o.component';
import{StatePComponent}from './state-p/state-p.component';
import{StateQComponent}from './state-q/state-q.component';
import{StateRComponent}from './state-r/state-r.component';
import{StateSComponent}from './state-s/state-s.component';
import{StateTComponent}from './state-t/state-t.component';
import{StateUComponent}from './state-u/state-u.component';
import{StateVComponent}from './state-v/state-v.component';
import{StateWComponent}from './state-w/state-w.component';
import{StateXComponent}from './state-x/state-x.component';
import{StateYComponent}from './state-y/state-y.component';
import{StateZComponent}from './state-z/state-z.component';


@Component({
  selector: 'app-alphabet-matching',
  templateUrl: './alphabet-matching.component.html',
  styleUrls: ['./alphabet-matching.component.css']
})
export class AlphabetMatchingComponent implements OnInit {
  public game: Phaser.Game;
  private _dashboardLink: String;


  constructor(private alphabetmatchingService: AlphabetMatchingService, @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
    GAMEJSON.DATA.data = [];
    this.alphabetmatchingService.onPreloadImages().subscribe(element => {
      GAMEJSON.DATA.data.push(element);


      this.game = new Phaser.Game(element.GAMEWINDOW.WIDTH, element.GAMEWINDOW.HEIGHT, Phaser.AUTO, 'container');
      this.game.state.add('IntroGame', IntroComponent, false);
      this.game.state.add('StateAGame', StateAComponent, false);
      this.game.state.add('StateBGame', StateBComponent, false);
      this.game.state.add('StateCGame', StateCComponent, false);
      this.game.state.add('StateDGame', StateDComponent, false);
      this.game.state.add('StateEGame', StateEComponent, false);
      this.game.state.add('StateFGame', StateFComponent, false);
      this.game.state.add('StateGGame', StateGComponent, false);
      this.game.state.add('StateHGame', StateHComponent, false);
      this.game.state.add('StateIGame', StateIComponent, false);
      this.game.state.add('StateJGame', StateJComponent, false);
      this.game.state.add('StateKGame', StateKComponent, false);
      this.game.state.add('StateLGame', StateLComponent, false);
      this.game.state.add('StateMGame', StateMComponent, false);
      this.game.state.add('StateNGame', StateNComponent, false);
      this.game.state.add('StateOGame', StateOComponent, false);
      this.game.state.add('StatePGame', StatePComponent, false);
      this.game.state.add('StateQGame', StateQComponent, false);
      this.game.state.add('StateRGame', StateRComponent, false);
      this.game.state.add('StateSGame', StateSComponent, false);
      this.game.state.add('StateTGame', StateTComponent, false);
      this.game.state.add('StateUGame', StateUComponent, false);
      this.game.state.add('StateVGame', StateVComponent, false);
      this.game.state.add('StateWGame', StateWComponent, false);
      this.game.state.add('StateXGame', StateXComponent, false);
      this.game.state.add('StateYGame', StateYComponent, false);
      this.game.state.add('StateZGame', StateZComponent, false);
      
      this.game.state.start('StateKGame');
      
      
    });
}
}
