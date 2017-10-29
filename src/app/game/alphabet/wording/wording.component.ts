import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';

@Component({
  selector: 'app-wording',
  templateUrl: './wording.component.html',
  styleUrls: ['./wording.component.css']
})
export class WordingComponent implements OnInit {

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
        let onload_audio, play_next, click_effect, wrong_answer, correct_answer;




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
              if (element.itemName == "wronganswer") {
                wrong_answer = this.game.add.audio(element.itemName);
                wrong_answer.allowMultiple = false;
              }
              if (element.itemName == "correctanswer") {
                correct_answer = this.game.add.audio(element.itemName);
                correct_answer.allowMultiple = false;
              }


            });

            elements.chacraterImages['button'].forEach(element => {

              if (element.itemName == "outline-word") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {

                  let answervalidate = GAMEDATA.wordsanswer.filter(
                    answer => answer === element.itemid);

                  if (answervalidate.length == 1) {
                    correct_answer.play();
                  } else if (answervalidate.length == 0) {
                    wrong_answer.play();
                  }

                  this.game.add.button(GAMEDATA.GAMEINFO[0].slideData[5].chacraterImages.button[7].itemPosition[0], GAMEDATA.GAMEINFO[0].slideData[5].chacraterImages.button[7].itemPosition[1], "submit", () => {
                       this.game.sound.stopAll();
                    this.game.state.start("WordFinalGame");
                  }, this, 2, 1, 0);

                  if (answervalidate.length == 1) {
                    this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'outline-word-right', () => {


                    }, this, 2, 1, 0);
                  } else if (answervalidate.length == 0) {
                    this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'outline-word-wrong', () => {


                    }, this, 2, 1, 0);
                  }


                }, this, 2, 1, 0);


              }





              if (element.itemName == "submit-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }

              // onload_audio.onStop.add(() => {
              //    if (element.itemName == "play-button") {
              //     this.game.add.button(element.itemPosition[0], element.itemPosition[1],  "play-button", () => {




              //     this.game.add.button(element.itemPosition[0], element.itemPosition[1],  "submit", () => {                   


              //     }, this, 2, 1, 0);

              //     }, this, 2, 1, 0);
              //    }


              // }, this);


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
