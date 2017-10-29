import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';
@Component({
  selector: 'app-tracing',
  templateUrl: './tracing.component.html',
  styleUrls: ['./tracing.component.css']
})
export class TracingComponent implements OnInit {

  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {
  }

  preload() {

     GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {
          if (elements.sliderType == "tracingSlide") {


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
 i;
  r;
  c; bmd;
  bmdDest;
  colors = "#274E58";

  create() {
    this.game.stage.backgroundColor = '#fff';
    let style = { font: "normal 38px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
     GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {

        element.slideData.forEach(elements => {
          if (elements.sliderType == "tracingSlide") {
     let onload_audio, play_next;
               elements.chacraterImages['general'].forEach(element => {

              // this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);

            });

              elements.chacraterImages['seperate'].forEach(element => {
              this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
            });

              this.bmd = this.game.make.bitmapData(this.game.width, this.game.height);

            this.bmdDest = this.game.make.bitmapData(this.game.width, this.game.height);
            this.bmdDest.addToWorld();

            this.colors = Phaser.Color.HSVColorWheel();



            elements.chacraterImages['audio'].forEach(element => {
              if (element.itemName == "welcome") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }

              if (element.itemName == "playnext") {
                play_next = this.game.add.audio(element.itemName);
                play_next.allowMultiple = false;
              }


            });


            elements.chacraterImages['button'].forEach(element => {

              onload_audio.play();  // Start Button

              if (element.itemType == "button-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }
              onload_audio.onStop.add(() => {

                //   play_next.play();
                //   play_next.onStop.add(() => {
                if (element.itemType == "button") {
                  this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'trace-button', () => {

                    this.game.input.addMoveCallback(this.paint, this);

                    this.i = 0;
                    this.r = new Phaser.Rectangle(0, 0, this.game.width, this.game.height);

                    //  r = the rotation, s = the scale
                    let data = { r: 0, s: 0.5 };

                    //  Change the tween duration, ease type, values, etc for different effects
                    this.game.add.tween(data).to({ r: 360, s: 2 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
                     this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'play-button', () => {
                        this.game.sound.stopAll();
                      this.game.state.start("WordStaticGame");
                        }, this, 2, 1, 0);
                  }, this, 2, 1, 0);
                }
                //},this);

              }, this);

            });
          }
        });
      }
    });
  }


    paint(pointer, x, y) {
    if (pointer.isDown) {
      //  Change the 4 - the width of the pen, to anything you like
      this.bmd.circle(x, y, 8, this.colors);

      this.i = this.game.math.wrapValue(this.i, 1, 359);
    }
  }

  update() {

    //  Change the 0.1 to something like 0.5 for a shorter 'trail'
    //this.bmdDest.fill('#fff');

    //  Change the 0.7 at the end, it's the alpha value, lower it for a softer effect
    this.bmdDest.copy(this.bmd, 0, 0);

  }

}
