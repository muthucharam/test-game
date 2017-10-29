import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';
@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {

  public game: Phaser.Game;
  constructor(private alphabeticService: AlphabetService) { }

  ngOnInit() {
  }
  colors = "#000000";
  blackBox;
  greenBox;
  redBox;
  blueBox;
  preload() {

    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {
          if (elements.sliderType == "paintingSlide") {
            //   this.game.load.image('blackBox', 'assets/games/general/black.png');
            //  this.game.load.image('greenBox', 'assets/games/general/green.png');
            //   this.game.load.image('redBox', 'assets/games/general/red.png');
            //   this.game.load.image('blueBox', 'assets/games/general/blue.png');
            this.game.load.image('whiteColor', 'assets/games/general/white.png');
            this.game.load.image('orangeColor', 'assets/games/general/orange.png');
            this.game.load.image('redColor', 'assets/games/general/red.png');
            this.game.load.image('greyColor', 'assets/games/general/grey.png');
            this.game.load.image('greenColor', 'assets/games/general/green.png');
            this.game.load.image('blueColor', 'assets/games/general/blue.png');

            this.game.load.image('basePallete', 'assets/games/general/palette.png');


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

  create() {
    this.game.stage.backgroundColor = '#fff';
    let style = { font: "normal 38px", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };



     GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {

        element.slideData.forEach(elements => {
          if (elements.sliderType == "paintingSlide") {
            let onload_audio, play_next;
            elements.chacraterImages['general'].forEach(element => {

              // this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);

            });

         


            this.bmd = this.game.make.bitmapData(850, 600);

            this.bmdDest = this.game.make.bitmapData(850, 600);
            this.bmdDest.addToWorld();
            this.game.add.sprite(0, 0, this.bmd);
            this.colors = Phaser.Color.HSVColorWheel();

    let basePalette = this.game.add.sprite(597, 15, 'basePallete');
    let whiteCircle = this.game.add.sprite(646, 146, 'whiteColor');
    let blueCircle = this.game.add.sprite(615, 103, 'blueColor');
    let greenCircle = this.game.add.sprite(622, 64, 'greenColor');
    let orangeCircle = this.game.add.sprite(649, 34, 'orangeColor');
    let redCircle = this.game.add.sprite(693, 30, 'redColor');
    let greyCircle = this.game.add.sprite(715, 75, 'greyColor');

    whiteCircle.inputEnabled = true;
    blueCircle.inputEnabled = true;
    greenCircle.inputEnabled = true;
    orangeCircle.inputEnabled = true;
    redCircle.inputEnabled = true;
    greyCircle.inputEnabled = true;

    whiteCircle.events.onInputDown.add(this.whiteColor, this);
    blueCircle.events.onInputDown.add(this.blueColor, this);
    greenCircle.events.onInputDown.add(this.greenColor, this);
    orangeCircle.events.onInputDown.add(this.orangeColor, this);
    redCircle.events.onInputDown.add(this.redColor, this);
    greyCircle.events.onInputDown.add(this.greyColor, this);
   elements.chacraterImages['seperate'].forEach(element => {
              this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
            });

            elements.chacraterImages['audio'].forEach(element => {
              if (element.itemName == "welcome") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }

              if (element.itemName == "colornext") {
                play_next = this.game.add.audio(element.itemName);
                play_next.allowMultiple = false;
              }
              // this.blackBox = this.game.add.sprite(597, 5, 'blackBox');
              // this.gralphabet_big_case_aeenBox = this.game.add.sprite(648, 5, 'greenBox');
              // this.redBox = this.game.add.sprite(699, 5, 'redBox');
              // this.blueBox = this.game.add.sprite(749, 5, 'blueBox');
              // this.blackBox.inputEnabled = true;
              // this.greenBox.inputEnabled = true;
              // this.redBox.inputEnabled = true;
              // this.blueBox.inputEnabled = true;
              // this.blackBox.events.onInputDown.add(this.blackBoxSelection, this);
              // this.greenBox.events.onInputDown.add(this.greenBoxSelection, this);
              // this.redBox.events.onInputDown.add(this.redBoxSelection, this);
              // this.blueBox.events.onInputDown.add(this.blueBoxSelection, this);

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
                  this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'color-button', () => {

                    this.game.input.addMoveCallback(this.paint, this);

                    this.i = 0;
                    this.r = new Phaser.Rectangle(0, 0, this.game.width, this.game.height);

                    //  r = the rotation, s = the scale
                    let data = { r: 0, s: 0.5 };

                    //  Change the tween duration, ease type, values, etc for different effects
                    this.game.add.tween(data).to({ r: 360, s: 2 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
                    this.game.add.button(element.itemPosition[0], element.itemPosition[1], 'play-button', () => {
                      this.game.sound.stopAll();
                      this.game.state.start("TracingGame");
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

  blackBoxSelection() {
    this.colors = "#000000";
  }

  greenBoxSelection() {
    this.colors = "#2fd661";
  }

  redBoxSelection() {
    this.colors = "#ed1c24";
  }

  blueBoxSelection() {
    this.colors = "#00a2f4";
  }

  update() {

    //  Change the 0.1 to something like 0.5 for a shorter 'trail'
    //this.bmdDest.fill('#fff');

    //  Change the 0.7 at the end, it's the alpha value, lower it for a softer effect
    this.bmdDest.copy(this.bmd, 0, 0);

  }



  whiteColor() {
    this.colors = "#FFFFFF";
  }

  blueColor() {
    this.colors = "#49A0D8";
  }

  greenColor() {
    this.colors = "#0BB89B";
  }

  orangeColor() {
    this.colors = "#F8A93B";
  }

  redColor() {
    this.colors = "#EF4B36";
  }

  greyColor() {
    this.colors = "#274E58";
  }

}
