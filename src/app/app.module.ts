import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {AppRoutingModule} from './app.routing';
import {AlphabetComponent} from './game/alphabet/alphabet.component';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {AppService} from './app.service';
import {GamesService} from './game/games.service';
import { Http,HttpModule, Response, Headers, RequestOptions,ConnectionBackend } from '@angular/http';
import { IntroComponent } from './game/alphabet/intro/intro.component';
import {AlphabetService} from './game/alphabet/alphabet.service';
import {EmotionService} from './game/emotion/emotion.service';
import {StoryService} from './game/story/story.service';
import {AlphabetMatchingService} from './game/alphabet-matching/alphabet-matching.service';

import { PictureComponent } from './game/alphabet/picture/picture.component';
import { ShootingComponent } from './game/alphabet/shooting/shooting.component';
import { ShootingStaticComponent } from './game/alphabet/shooting-static/shooting-static.component';
import { ShootingSuccessComponent } from './game/alphabet/shooting-success/shooting-success.component';
import { PaintingComponent } from './game/alphabet/painting/painting.component';
import { TracingComponent } from './game/alphabet/tracing/tracing.component';
import { WordingComponent } from './game/alphabet/wording/wording.component';
import { WordStaticComponent } from './game/alphabet/word-static/word-static.component';
import { WordFinalComponent } from './game/alphabet/word-final/word-final.component';
import { EmotionComponent } from './game/emotion/emotion.component';
import { IntroStartComponent } from './game/emotion/intro-start/intro-start.component';
import { StateOneComponent } from './game/emotion/state-one/state-one.component';
import { StateOneStaticComponent } from './game/emotion/state-one-static/state-one-static.component';
import { StateTwoComponent } from './game/emotion/state-two/state-two.component';
import { StateThreeComponent } from './game/emotion/state-three/state-three.component';
import { StateFinalComponent } from './game/emotion/state-final/state-final.component';
import { AdharLoginComponent } from './adhar-login/adhar-login.component';
import { StoryComponent } from './game/story/story.component';
import { AlphabetMatchingComponent } from './game/alphabet-matching/alphabet-matching.component';
import { StateAComponent } from './game/alphabet-matching/state-a/state-a.component';
import { StateBComponent } from './game/alphabet/state-b/state-b.component';
import { StateCComponent } from './game/alphabet-matching/state-c/state-c.component';
import { StateDComponent } from './game/alphabet-matching/state-d/state-d.component';
import { StateEComponent } from './game/alphabet-matching/state-e/state-e.component';
import { StateFComponent } from './game/alphabet-matching/state-f/state-f.component';
import { StateGComponent } from './game/alphabet-matching/state-g/state-g.component';
import { StateHComponent } from './game/alphabet-matching/state-h/state-h.component';
import { StateIComponent } from './game/alphabet-matching/state-i/state-i.component';
import { StateJComponent } from './game/alphabet-matching/state-j/state-j.component';
import { StateKComponent } from './game/alphabet-matching/state-k/state-k.component';
import { StateLComponent } from './game/alphabet-matching/state-l/state-l.component';
import { StateMComponent } from './game/alphabet-matching/state-m/state-m.component';
import { StateNComponent } from './game/alphabet-matching/state-n/state-n.component';
import { StateOComponent } from './game/alphabet-matching/state-o/state-o.component';
import { StatePComponent } from './game/alphabet-matching/state-p/state-p.component';
import { StateQComponent } from './game/alphabet-matching/state-q/state-q.component';
import { StateRComponent } from './game/alphabet-matching/state-r/state-r.component';
import { StateSComponent } from './game/alphabet-matching/state-s/state-s.component';
import { StateTComponent } from './game/alphabet-matching/state-t/state-t.component';
import { StateUComponent } from './game/alphabet-matching/state-u/state-u.component';
import { StateVComponent } from './game/alphabet-matching/state-v/state-v.component';
import { StateWComponent } from './game/alphabet-matching/state-w/state-w.component';
import { StateXComponent } from './game/alphabet-matching/state-x/state-x.component';
import { StateYComponent } from './game/alphabet-matching/state-y/state-y.component';
import { StateZComponent } from './game/alphabet-matching/state-z/state-z.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AlphabetComponent,
    IntroComponent,
    PictureComponent,
    ShootingComponent,
    ShootingStaticComponent,
    ShootingSuccessComponent,
    PaintingComponent,
    TracingComponent,
    WordingComponent,
    WordStaticComponent,
    WordFinalComponent,
    EmotionComponent,
    IntroStartComponent,
    StateOneComponent,
    StateOneStaticComponent,
    StateTwoComponent,
    StateThreeComponent,
    StateFinalComponent,
    AdharLoginComponent,
    StoryComponent,
    AlphabetMatchingComponent,
    StateAComponent,
    StateBComponent,
    StateCComponent,
    StateDComponent,
    StateEComponent,
    StateFComponent,
    StateGComponent,
    StateHComponent,
    StateIComponent,
    StateJComponent,
    StateKComponent,
    StateLComponent,
    StateMComponent,
    StateNComponent,
    StateOComponent,
    StatePComponent,
    StateQComponent,
    StateRComponent,
    StateSComponent,
    StateTComponent,
    StateUComponent,
    StateVComponent,
    StateWComponent,
    StateXComponent,
    StateYComponent,
    StateZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [AppService,GamesService,AlphabetService,EmotionService,StoryService,AlphabetMatchingService,{ provide: LocationStrategy, useClass: HashLocationStrategy }] , // { provide: LocationStrategy, useClass: HashLocationStrategy } if need hash tag in url add providers
  bootstrap: [AppComponent]
})
export class AppModule { }
