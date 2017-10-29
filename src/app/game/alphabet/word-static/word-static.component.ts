import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';

@Component({
  selector: 'app-word-static',
  templateUrl: './word-static.component.html',
  styleUrls: ['./word-static.component.css']
})
export class WordStaticComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {
  }

  preload() {

     GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {
          if (elements.sliderType == "wordSelection") {


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
        let onload_audio, play_next, click_effect;




        element.slideData.forEach(elements => {
          if (elements.sliderType == "wordSelection") {


            elements.chacraterImages['audio'].forEach(element => {
              if (element.itemName == "welcome") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }
              if (element.itemName == "click") {
                click_effect = this.game.add.audio(element.itemName);
                click_effect.allowMultiple = false;
              }
              if (element.itemName == "playnext") {
                play_next = this.game.add.audio(element.itemName);
                play_next.allowMultiple = false;
              }


            });

            elements.chacraterImages['button'].forEach(element => {
              onload_audio.play();  // Start Button
              if (element.itemName == "outline-word") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                  //  click_effect.play();

                }, this, 2, 1, 0);

              }

              if (element.itemName == "play-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }

              onload_audio.onStop.add(() => {
                if (element.itemName == "play-button") {
                  this.game.add.button(element.itemPosition[0], element.itemPosition[1], "play-button", () => {
   this.game.sound.stopAll();
                    this.game.state.start("WordingGame");

                  }, this, 2, 1, 0);
                }


              }, this);


            });


          }
        });
      }
    });

    GAMEDATA.words.forEach(element => {
      let one = this.game.add.text(element.itemPostion[0], element.itemPostion[1], element.word, style);
      one.setTextBounds(80, 100, 300, 100);
    });

  }

}
