import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

import { GAMEDATA, GAMEJSON } from './../../../app.config';

import { AlphabetService } from './../alphabet.service';
@Component({
  selector: 'app-shooting-success',
  templateUrl: './shooting-success.component.html',
  styleUrls: ['./shooting-success.component.css']
})
export class ShootingSuccessComponent implements OnInit {
  public game: Phaser.Game;
  constructor(private alphabetService: AlphabetService) {


  }
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
            let onload_audio, play_next;
            elements.chacraterImages['general'].forEach(element => {


              if (element.itemName == "success") {
                this.game.add.image(element.itemPosition[0], element.itemPosition[1], element.itemName);
              }
            });

            elements.chacraterImages['seperate'].forEach(element => {
              // this.game.physics.startSystem(Phaser.Physics.ARCADE);
              // aliens = this.game.add.group();
              //  aliens.enableBody = true;
              // for (var i = 0; i < 5; i++) {
              //  console.log(this.game.world.randomX);
              //   console.log(this.game.world.randomY);
              //  var s = aliens.create(this.game.world.randomX, this.game.world.randomY - 20, element.itemName);
              ////  s.name = 'alien' + s;
              //  s.body.collideWorldBounds = true;
              //  s.body.bounce.setTo(0.8, 0.8);
              // s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
              //  s.inputEnabled = true;
              //s.events.onInputDown.add(this.destroySprite, this);

              //}


            });

            elements.chacraterImages['audio'].forEach(element => {
              if (element.itemName == "success") {
                onload_audio = this.game.add.audio(element.itemName);
                onload_audio.allowMultiple = false;
              }

              if (element.itemName == "colornext") {
                play_next = this.game.add.audio(element.itemName);
                play_next.allowMultiple = false;
              }


            });

            elements.chacraterImages['button'].forEach(element => {

              onload_audio.play();  // Start Button

              if (element.itemName == "color-gray") {
                this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {
                }, this, 2, 1, 0);
              }
              onload_audio.onStop.add(() => {
              //  play_next.play();
              //  play_next.onStop.add(() => {
                  if (element.itemName == "color-button") {
                    this.game.add.button(element.itemPosition[0], element.itemPosition[1], element.itemName, () => {

  this.game.sound.stopAll();
                      this.game.state.start("PaintingGame");

                    }, this, 2, 1, 0);
                  }
               // },this);

              }, this);

            });

          }

        });
      }
    });
  }

}
