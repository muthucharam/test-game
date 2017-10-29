import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { EmotionService } from './../emotion.service';
@Component({
  selector: 'app-state-two',
  templateUrl: './state-two.component.html',
  styleUrls: ['./state-two.component.css']
})
export class StateTwoComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private emotionService: EmotionService) { }

  ngOnInit() {
  }

  preload() {
    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      console.log(element)
      if (element.gameId == "emotion-motion") {
        element.slideData.forEach(elements => {
          if (elements.sliderType == "SelectScaredGameSlide") {

            //  console.log(JSON.stringify(elements.chacraterImages['general']));
            elements.chacraterImages['general'].forEach(element => {

              this.game.load.image(element.itemName, GAMEDATA.GAMEWINDOW.s3GameStroageGeneral + element.url);

            });

            elements.chacraterImages['button'].forEach(element => {
              this.game.load.image(element.itemName, GAMEDATA.GAMEWINDOW.s3GameStroageGeneral + element.url, 80, 30);

            });

            elements.chacraterImages['seperate'].forEach(element => {
              this.game.load.image(element.itemName, GAMEDATA.GAMEWINDOW.s3GameStroageLink + element.url);
            });



            elements.chacraterImages['audio'].forEach(element => {
              this.game.load.audio(element.itemName, GAMEDATA.GAMEWINDOW.s3GameStroageLink + element.url);

            });


          }
        });
      }
    });
  }

  create() {

    this.game.stage.backgroundColor = '#fff';
    let style = { font: "normal 38px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "emotion-motion") {


        element.slideData.forEach(elements => {
          if (elements.sliderType == "SelectScaredGameSlide") {
            this.game.stage.backgroundColor = elements.backgroundColor;
            let onload_audio;
            elements.chacraterImages['general'].forEach(element => {

              this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);

            });





            elements.chacraterImages['audio'].forEach(element => {
              onload_audio = this.game.add.audio(element.itemName);
              onload_audio.allowMultiple = false;
              onload_audio.play();  // Start Button

            });

            elements.chacraterImages['button'].forEach(element => {

              if (element.itemName == "outline-word") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }

              onload_audio.onStop.add(() => {
                if (element.itemName == "outline-word") {

                  this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {

                    let answervalidate = GAMEDATA.emotion.filter(answer =>
                      answer.sliderType == "SelectScaredGameSlide"
                    );

                    let answerlength = answervalidate[0].answer.filter(
                      answer => answer === element.itemid);

                    if (answerlength.length == 0) {
                      this.game.add.button(element.itemPosition[0], element.itemPosition[1], "outline-word-right", () => { this.game.state.start("StateThreeGame");}, this, 2, 1, 0);
                      
                           
                      
                  
                    } else if (answerlength.length == 1) {
                      this.game.add.button(element.itemPosition[0], element.itemPosition[1], "outline-word-wrong", () => {     this.game.state.start("StateThreeGame");}, this, 2, 1, 0);
                        
                       
                     
                          
                    }


                  }, this, 2, 1, 0);
                }
              }, this);
          
            });


            elements.chacraterImages['seperate'].forEach(element => {
              this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
            });
            let number = this.game.add.text(0, 0, elements.nameHeader, style);

            number.setTextBounds(210, 400, 500, 10);

          }
        });



      }
    });

  }
  
}
