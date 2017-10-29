import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';

@Component({
  selector: 'app-word-final',
  templateUrl: './word-final.component.html',
  styleUrls: ['./word-final.component.css']
})
export class WordFinalComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {
  }

  preload() {

     GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {
          if (elements.sliderType == "gameComplete") {


            elements.chacraterImages['general'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url);
            });

            elements.chacraterImages['seperate'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);
            });

            elements.chacraterImages['button'].forEach(element => {
              this.game.load.image(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageGeneral + element.url, 80, 30);

            });

            elements.chacraterImages['audio'].forEach(element => {
              this.game.load.audio(element.itemName, GAMEJSON.DATA.data[0].GAMEWINDOW.s3GameStroageLink + element.url);

            });

          }
        });
      }
    });
  }


  create() {

    this.game.stage.backgroundColor = '#fff';
    let style = { font: "normal 38px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    GAMEDATA.GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {
          let onload_audio
          if (elements.sliderType == "gameComplete") {


            elements.chacraterImages['general'].forEach(element => {

              this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);

            });

            elements.chacraterImages['audio'].forEach(element => {
              if (element.itemName == "success") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
                onload_audio.play();  // Start Button
                onload_audio.onStop.add(() => {
                 // this.game.state.start("IntroGame");
                 
                }, this);
              }



            });

            elements.chacraterImages['button'].forEach(element => {



              //  if(element.itemName == "replay-gray"){
              //     this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
              //    }, this, 2, 1, 0);
              //  }

              //   if(element.itemName == "replay"){
              //  this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {

              // this.game.sound.stopAll();


              //   }, this, 2, 1, 0);
              //  }


            });

          }




        });
      }
    });
  }

}
