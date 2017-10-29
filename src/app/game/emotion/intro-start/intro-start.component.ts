import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { EmotionService } from './../emotion.service';
@Component({
  selector: 'app-intro-start',
  templateUrl: './intro-start.component.html',
  styleUrls: ['./intro-start.component.css']
})
export class IntroStartComponent implements OnInit {

  public game: Phaser.Game;
  
  
    constructor(private emotionService: EmotionService) {
  
    }
  
  
  
    preload() {
      console.log("Intro",GAMEJSON);
      GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
  
  
        if (element.gameId == "emotion-motion") {
  
          element.slideData.forEach(elements => {
  
            if (elements.sliderType == "intro-startSlide") {
  
              elements.chacraterImages['general'].forEach(element => {
  
                this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url);
  
              });
  
              elements.chacraterImages['button'].forEach(element => {
  
                //  this.game.load.spritesheet(element.itemName, GAMEDATA.GAMEWINDOW.s3GameStroageGeneral + element.url, 80, 30);
                this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url, 115, 87);
  
              });
  
              elements.chacraterImages['seperate'].forEach(element => {
                this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);
              });
  
  
  
              elements.chacraterImages['audio'].forEach(element => {
                this.game.load.audio(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);
  
              });
  
  
  
            }
          });
        }
      });
      
    }
  
    buttonhover; buttonover;
    create() {
  
  
      this.game.stage.backgroundColor = '#fff';
      //let style = { font: "bold 36px 'century-gothic'", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
      GAMEJSON.DATA.data[0].GAMEINFO.forEach(gameInfo => {
        if (gameInfo.gameId == "emotion-motion") {
  
  
          gameInfo.slideData.forEach(sliderInfo => {
  
  
  
  
  
  
            if (sliderInfo.sliderType == "intro-startSlide") {
  
  
  
  
              this.game.stage.backgroundColor = sliderInfo.backgroundColor;
              let onload_audio; let mouseClick;
              sliderInfo.chacraterImages['general'].forEach(characterGenInfo => {
  
                this.game.add.image(characterGenInfo.itemPosition[0], characterGenInfo.itemPosition[1], characterGenInfo.itemName);
  
              });
  
              sliderInfo.chacraterImages['seperate'].forEach(characterSepInfo => {
                this.game.add.image(characterSepInfo.itemPosition[0], characterSepInfo.itemPosition[1], characterSepInfo.itemName);
              });
  
  
  
  
              sliderInfo.chacraterImages['audio'].forEach(audioInfo => {
  
                if (audioInfo.itemName == "mouse-click-audio") {
                  mouseClick = this.game.add.audio(audioInfo.itemName);
                  mouseClick.allowMultiple = audioInfo.allowMultiple
                } else {
                  onload_audio = this.game.add.audio(audioInfo.itemName);
                  onload_audio.allowMultiple = audioInfo.allowMultiple;
                }
  
  
              });
  
              sliderInfo.chacraterImages['button'].forEach(buttonInfo => {
  
                onload_audio.play();  // Start Button
  
                if (buttonInfo.itemType == "button-gray") {
  
                  this.game.add.button(buttonInfo.itemPosition[0], buttonInfo.itemPosition[1], buttonInfo.itemName, () => {
                  }, this, 2, 1, 0);
                }
                onload_audio.onStop.add(() => {
                  if (buttonInfo.itemType == "button") {
                    this.buttonhover = this.game.add.button(buttonInfo.itemPosition[0], buttonInfo.itemPosition[1], buttonInfo.itemName, () => {
                      mouseClick.play();
                      //  this.game.sound.stopAll();
                      this.game.state.start("StateOneStaticGame");
  
                    }, this, 2, 1, 0);
  
                    
  
  
                    this.buttonhover.events.onInputUp.add(() => {
                      console.log("up");
                   
                    }, this);
  
  
                  }
                }, this);
  
              });
  
              sliderInfo.captions.forEach(captionInfo => {
  
                let alphaLetter = this.game.add.text(0, 0, captionInfo.text, captionInfo.style);
  
                alphaLetter.setTextBounds(captionInfo.bounds[0], captionInfo.bounds[1], captionInfo.bounds[2], captionInfo.bounds[3]);
              });
  
            }
          });
  
  
  
        }
      });
  
  
    }
  
    ngOnInit() {
  
  
    }
  
  
  
  

}
