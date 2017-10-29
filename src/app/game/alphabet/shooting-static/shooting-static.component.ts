import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';
@Component({
  selector: 'app-shooting-static',
  templateUrl: './shooting-static.component.html',
  styleUrls: ['./shooting-static.component.css']
})
export class ShootingStaticComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) { }

  ngOnInit() {
  }


  preload() {


    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        element.slideData.forEach(elements => {

          if (elements.sliderType == "shootingSlide") {
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
    GAMEJSON.DATA.data[0].GAMEINFO.forEach(element => {
      if (element.gameId == "english-capital-letters") {
        let aliens;
        element.slideData.forEach(elements => {
          if (elements.sliderType == "shootingSlide") {
            let onload_audio; let mouseClick;
            elements.chacraterImages['general'].forEach(element => {
              if (element.itemName != "success") {
                this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              }
            });

            elements.chacraterImages['seperate'].forEach(element => {
              this.game.physics.startSystem(Phaser.Physics.ARCADE);
              aliens = this.game.add.group();
              aliens.enableBody = true;
              var positions = [{ x: 350, y: 300 }, { x: 450, y: 250 }, { x: 550, y: 350 }, { x: 600, y: 120 }, { x: 650, y: 220 }];
              for (var i = 0; i < 5; i++) {

                var s = aliens.create(positions[i].x, positions[i].y, element.itemName);
                // s.name = 'alien' + s;
                // s.body.collideWorldBounds = true;
                //  s.body.bounce.setTo(0.8, 0.8);
                // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
                //  s.inputEnabled = true;
                //  s.events.onInputDown.add(this.destroySprite, this);

              }
              //  this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
            });

            elements.chacraterImages['audio'].forEach(element => {


              if (element.itemName == "mouse-click-audio") {

                mouseClick = this.game.add.audio(element.itemName);
                mouseClick.allowMultiple = false;
              } else if (element.itemName == "welcome") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }
            });

            elements.chacraterImages['button'].forEach(element => {

              onload_audio.play();  // Start Button

              if (element.itemName == "play-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }
              onload_audio.onStop.add(() => {
                if (element.itemName == "play-button") {
                  this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                    mouseClick.play();
                    // this.game.sound.stopAll();
                    this.game.state.start("ShootingGame");

                  }, this, 2, 1, 0);
                }
              }, this);

            });

          }

        });
      }
    });
  }
}
