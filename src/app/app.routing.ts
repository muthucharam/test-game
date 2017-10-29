import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ROUTER } from './app.config';
import {AlphabetComponent} from './game/alphabet/alphabet.component';
import {EmotionComponent} from './game/emotion/emotion.component';
import {AdharLoginComponent} from './adhar-login/adhar-login.component';
import { StoryComponent } from './game/story/story.component';
import { AlphabetMatchingComponent } from './game/alphabet-matching/alphabet-matching.component';

const routes: Routes = [
    {
        path: 'game/alphabet',
        component: AlphabetComponent,
    },
    {
        path: 'game/emotion',
        component: EmotionComponent,
    },
    {
        path: 'game/story',
        component: StoryComponent,
    },
    {
        path: 'game/alphabet-matching',
        component: AlphabetMatchingComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }